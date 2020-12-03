import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Respostas', table => {
    table.increments('ID').primary();
    table.json('valores').notNullable();
    table.date('data').notNullable();

    // Foreign Key:
    table.integer('ID_Análise').references('ID').inTable('Análises');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Análises');
}