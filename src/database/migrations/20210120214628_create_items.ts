import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('items', table => {
    table.increments('id')
    table.string('title').notNullable().unique()
    table.string('image_url').notNullable().unique()
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('items')
}
