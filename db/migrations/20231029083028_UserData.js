/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('UserData',table=>{
        table.increments('id').primary()
        table.string('username')
        table.string('password')
        table.string('email')
        table.string('first_name')
        table.string('last_name')
        table.string('phone_number')
        table.integer("skilldata_id").unsigned().references("id").inTable("SkillData")
        table.timestamp('registered_at')
        table.timestamp('updated_at')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("UserData")
  
};
