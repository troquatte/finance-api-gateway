'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpenseSchema extends Schema {
  up () {
    this.create('expenses', (table) => {
      table.increments()
      table.string("description");
      table.string("type");
      table.decimal("value", 50,2);
      table.string("period");
      table.bigInteger("range");

      table.integer("users_id").unsigned()
      table.foreign("users_id")
            .references("id")
            .inTable("users")
            .onDelete("cascade")
            .onUpdate("cascade");

      table.timestamps()
    })
  }

  down () {
    this.drop('expenses')
  }
}

module.exports = ExpenseSchema
