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
    { skill: "Keamanan Siber", created_at: currentDate, updated_at: currentDate },
    { skill: "Komputasi Cloud", created_at: currentDate, updated_at: currentDate },
    { skill: "Machine Learning dan Kecerdasan Buatan", created_at: currentDate, updated_at: currentDate },
    { skill: "Manajemen Basis Data", created_at: currentDate, updated_at: currentDate },
    { skill: "Administrasi Jaringan", created_at: currentDate, updated_at: currentDate },
    { skill: "DevOps", created_at: currentDate, updated_at: currentDate },
    { skill: "Pengembangan Aplikasi Seluler", created_at: currentDate, updated_at: currentDate },
    { skill: "Desain UI/UX", created_at: currentDate, updated_at: currentDate },
    { skill: "Robotika", created_at: currentDate, updated_at: currentDate },
    { skill: "Pencetakan 3D", created_at: currentDate, updated_at: currentDate },
    { skill: "IoT (Internet of Things)", created_at: currentDate, updated_at: currentDate },
    { skill: "Blockchain", created_at: currentDate, updated_at: currentDate },
    { skill: "Pengeditan Video dan Audio", created_at: currentDate, updated_at: currentDate },
    { skill: "Desain Grafis", created_at: currentDate, updated_at: currentDate },
    { skill: "CAD (Computer-Aided Design)", created_at: currentDate, updated_at: currentDate },
    { skill: "Sistem ERP (Enterprise Resource Planning)", created_at: currentDate, updated_at: currentDate },
    { skill: "Realitas Virtual (VR) dan Augmented Reality (AR)", created_at: currentDate, updated_at: currentDate }
    
  ]);
};

