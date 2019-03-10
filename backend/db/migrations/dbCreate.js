exports.up = async (knex, Promise) => {
  try {
    await Promise.all([

      await knex.schema.createTable('applandeo', (table) => {
        table.increments();
        table.string("name"),
          table.string("second_name")
        table.string("email")
        table.string("phone")
        table.string("street")
        table.string("city")
        table.string("password")
 
      })

    ]);
  }
  catch (error) {
    console.log("error db create", error)
  }


}

exports.down = async function (knex) {
  await Promise.all([
    knex.schema
      .dropTableIfExists("applandeo")
  ])
};

