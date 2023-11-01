/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('UserCorpData',table=>{
        table.increments('id').primary()
        table.string('username')
        table.string('password')
        table.string('website')
        table.timestamp('registered_at')
        table.timestamp('updated_at')
    })
  
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("UserCorpData")
};
