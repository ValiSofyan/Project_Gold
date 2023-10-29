/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('oho',table=>{
        table.increments('id').primary()
        table.integer("user_id").unsigned().references("id").inTable("UserData")
        table.timestamp('aplicationDate_at')
        table.timestamp('updated_at')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("oho")
};
