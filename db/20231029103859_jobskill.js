/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('jobskill',table=>{
        table.increments('id').primary()
        table.integer("job_id").unsigned().references("id").inTable("joblisting")
        table.integer("SkillData_id").unsigned().references("id").inTable("SkillData")
        table.timestamp('created_at')
        table.timestamp('updated_at')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("jobskill")
};
