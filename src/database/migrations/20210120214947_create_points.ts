import Knex from 'knex'

export async function up (knex: Knex) {
  await knex.schema.createTable('points', table => {
    table.increments('id')
    table.string('name').notNullable().unique()
    table.string('email').notNullable().unique()
    table.integer('phone_number').notNullable().unique()
    table.string('image_url').notNullable().unique()
    table.integer('user_id').notNullable().references('id').inTable('users')
    table.string('address').notNullable().unique()
    table.string('city').notNullable()
    table.string('state', 2).notNullable()
    table.timestamps(true, true)
  })
}

export async function down (knex: Knex) {
  await knex.schema.dropTable('points')
}
