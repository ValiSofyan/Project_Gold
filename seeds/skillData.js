/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('SkillData').del()
  await knex('SkillData').insert([
    {skill:'Pemrograman dan Koding', created_at:currentDate,updated_at: currentDate },
    {skill:'Pengembangan Web', created_at:currentDate,updated_at: currentDate },
    {skill:'Analisis Data', created_at:currentDate,updated_at: currentDate },
  ]);
};
