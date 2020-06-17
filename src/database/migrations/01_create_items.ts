import knex from 'knex'
export async function up(kenx: knex){
  return kenx.schema.createTable('items', table => {
    table.increments('id').primary()
    table.string('image').notNullable()
    table.string('title').notNullable()
    table.timestamps(true, true)
    
  })

}

export async function down(knex: knex){
  return knex.schema.dropTable('items')
}