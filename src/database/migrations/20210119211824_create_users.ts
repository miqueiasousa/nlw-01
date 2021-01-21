import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('reset_password_token').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}
