import knex from 'knex'
export async function up(kenx: knex){
  return kenx.schema.createTable('points', table => {
    table.increments('id').primary()
    table.string('image').notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.decimal('latitude').notNullable()
    table.decimal('longitude').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
    table.integer('number')
    table.timestamps(true, true)
    
  })

}

export async function down(knex: knex){
  return knex.schema.dropTable('points')
}