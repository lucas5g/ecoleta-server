import knex from 'knex'
export async function up(kenx: knex){
  return kenx.schema.createTable('point_items', table => {
    table.increments('id').primary()

    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points')
      
    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items')


    
      
    table.timestamps(true, true)
  })

}

export async function down(knex: knex){
  return knex.schema.dropTable('point_items')
}