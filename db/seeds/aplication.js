/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const currentDate = new Date()
  await knex('application').del()
  await knex('application').insert([
    {job_id:82,user_id:110, aplicationDate_at:currentDate},
  ]);
};
