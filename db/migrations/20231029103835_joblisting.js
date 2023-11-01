/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('joblisting',table=>{
        table.increments('id').primary()
        table.integer("company_id").unsigned().references("id").inTable("UserCorpData")
        table.string('title')
        table.string('description')
        table.string('location')
        table.timestamp('postdate_at')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("joblisting")
  
};
