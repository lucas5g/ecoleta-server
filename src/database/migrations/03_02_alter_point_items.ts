import knex from 'knex'
export async function up(kenx: knex){
  return kenx.schema.table('point_items', table => {
    table.foreign('point_id').references('id').inTable('points')
    table.foreign('item_id').references('id').inTable('items')
  })

}

export async function down(knex: knex){
  return knex.schema.dropTable('point_items')
// return knex.schema.d
}
