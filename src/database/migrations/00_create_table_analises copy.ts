import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Análises', table => {
    table.increments('ID').primary();
    table.json('dados').notNullable();
    table.date('data').notNullable()
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Análises');
}