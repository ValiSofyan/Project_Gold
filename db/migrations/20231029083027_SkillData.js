/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('SkillData',table=>{
        table.increments('id').primary()
        table.string('skill')
        table.timestamp('created_at')
        table.timestamp('updated_at')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("SkillData")
  
};
