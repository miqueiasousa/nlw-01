import Knex from 'knex'

export async function up (knex: Knex) {
  await knex.schema.createTable('points_items', table => {
    table.increments('id')
    table.integer('point_id').notNullable().references('id').inTable('points')
    table.integer('item_id').notNullable().references('id').inTable('items')
  })
}

export async function down (knex: Knex) {
  await knex.schema.dropTable('points_items')
}
