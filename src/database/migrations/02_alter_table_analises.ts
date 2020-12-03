import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.alterTable('Análises', table => {
    table.dropColumn('dados');
    table.decimal('time').notNullable;
    table.string('type').notNullable;
  });
}

export async function down(knex: Knex) {
  return knex.schema.alterTable('Análises', table => {
    table.dropColumn('type');
    table.dropColumn('time');
    table.json('dados').notNullable
  });
}