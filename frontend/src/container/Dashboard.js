import React, { Component } from 'react';
import { downloadRaport, downloadRaportFuture } from '../API'
import { withRouter } from "react-router-dom";
import '../../node_modules/react-vis/dist/style.css';
import moment from "moment"
import { BarChart, Bar, ResponsiveContainer, Legend, Text, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import { Preloader, Placeholder } from 'react-preloading-screen';
import Images from '../components/Images'
import City from '../components/City'
import ToggleChart from '../components/ToggleChart'

const API_KEY = "f0d0339a7d2c24e0d919dd8da96263b9";

class Dashboard extends Component {

    state = {
        city: "krakow",
        temp: 0,
        humidity: 0,
        wind: 0,
        pressure: 0,

        futureList: [],
        tempFuture: [],
        tempMaxFuture: [],
        tempMinFuture: [],
        dateFuture: [],
        humidityFuture: [],
        tempToggle: false,
        tempMinToggle: false,
        tempMaxToggle: false,
    }

    componentDidMount() {
        this.downloadData();
    }

    downloadData = () => {
        const temp = [];
        const tempMax = [];
        const tempMin = [];
        const date = [];
        const humidity = [];


        downloadRaport(this.state.city, API_KEY)
            .then(weatherNow => {
                this.setState({
                    temp: weatherNow.main.temp,
                    humidity: weatherNow.main.humidity,
                    wind: weatherNow.wind.speed,
                    pressure: weatherNow.main.pressure
                })
            })
        downloadRaportFuture(this.state.city, API_KEY)
            .then(weatherFuture => {
                this.setState({
                    futureList: weatherFuture

                })
            })
            .then(() => {
                this.state.futureList.list.map((item) => {
                    temp.push(item.main.temp)
                    tempMax.push(item.main.temp_max)
                    tempMin.push(item.main.temp_min)
                    humidity.push(item.main.humidity)
                    date.push(item.dt_txt)

                })
            })
            .then(() => {
                this.setState({
                    tempFuture: temp,
                    tempMaxFuture: tempMax,
                    tempMinFuture: tempMin,
                    humidityFuture: humidity,
                    dateFuture: date
                })
            })

    }

    createData = (Temp, TempMax, TempMin, Date) => {
        let list = []
        for (let i = 0; i < Temp.length; i++) {
            list.push({ Temp: Temp[i], TempMax: TempMax[i], TempMin: TempMin[i], Date: Date[i] })
        }
        return list;
    }

    createDataBar = (list1, list2) => {
        let list = []
        for (let i = 0; i < (list1.length); i++) {
            list.push({ x: new Date(list2[i]), y: list1[i] })
        }
        return list;
    }

    formatXAxis = (tickItem) => { return moment(tickItem).format("dd-HH") }

    handleInputChange = async (event) => {
        await this.setState({ city: event.target.value })
        this.downloadData()
    }

    handleToggle = (value, key) => { this.setState({ [key]: !value }) }



    render() {
        const date = this.state.dateFuture
        const humidity = this.state.humidityFuture
        const tempFuture = this.state.tempFuture
        const tempMaxFuture = this.state.tempMaxFuture
        const tempMinFuture = this.state.tempMinFuture
        const dane = this.createData(tempFuture, tempMaxFuture, tempMinFuture, date)
        let daneBar = this.createDataBar(humidity, date)

        const options = {
            title: {
                text: "Humidity"
            },

            axisX: {
                valueFormatString: "DDD hh:mm",
                labelAngle: -50

            },
            axisY: {
                valueFormatString: "#,###"
            },

            data: [{
                type: "column",
                dataPoints: daneBar
            }]
        }

        return (
            <div className="landing">
                <Preloader>

                    <Placeholder>
                        <img src={require('../images/loading.jpg')}></img>
                    </Placeholder>
                </Preloader>

                <City
                    state={this.state}
                    handleInput={this.handleInputChange} />

                <Images
                    state={this.state}
                    cssClass="container dashboard row" />


                <div className="displayChart" >

                    <LineChart width={1500} height={300} data={dane}  >
                        <Line hide={this.state.tempToggle} type="natural" dataKey="Temp" strokeWidth={2} stroke="red" />
                        <Line hide={this.state.tempMaxToggle} type="natural" dataKey="TempMax" strokeWidth={2} stroke="yellow" />
                        <Line hide={this.state.tempMinToggle} type="natural" dataKey="TempMin" strokeWidth={2} stroke="green" />
                        <CartesianGrid stroke="white" />
                        <XAxis dataKey="Date"
                            tickFormatter={this.formatXAxis} />
                        <YAxis />
                        <Legend ></Legend>
                    </LineChart>


                    <ToggleChart
                        state={this.state}
                        toggle={(value, key) => this.handleToggle(value, key)}
                    />

                </div >

                <div className="displayChart" >
                    <CanvasJSChart options={options} />
                </div>

            </div>
        );
    }
}

export default withRouter(Dashboard);