/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('UserData').del()
  await knex('UserData').insert([
    {
      username: 'Budi Susanto',
      password:'Pantai123', 
      email:'BudiSusanto@email.com',
      first_name:'Budi',
      last_name :'Susanto',
      phone_number:'81234567890',
      SkillData_id: knex("SkillData").where({ id: 2 }).select('id'),
      registered_at: currentDate,
      updated_at: currentDate 
    },
    {
      username: 'Ani Widjaya',
      password:'Gunung456', 
      email:'AniWidjaya@email.com',
      first_name:'Ani',
      last_name :'Widjaya',
      phone_number:'85212345678',
      SkillData_id: knex("SkillData").where({ id: 3 }).select('id'), 
      registered_at:currentDate,
      updated_at:   currentDate 
    },
    {
      username: 'Rina Kurnia',
      password:'Bunga789', 
      email:'RinaKurnia@email.com',
      first_name:'Rina',
      last_name :'Kurnia',
      phone_number:'81398765432',
      SkillData_id: knex("SkillData").where({ id: 1 }).select('id'), 
      registered_at: currentDate,
      updated_at: currentDate 
    },
  ]);
};
