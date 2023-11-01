/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('joblisting').del()
  await knex('joblisting').insert([
    {title:'Software Engineer',description:'Kami mencari Software Engineer terampil untuk bergabung dengan tim kami. Jika Anda memiliki pengalaman dalam pemrograman dan koding, segera daftar sekarang!',location:'Bandung',postdate_at:currentDate, },
    {title:'Ahli Keamanan Siber',description:'Kami sedang mencari Ahli Keamanan Siber untuk melindungi sistem kami dari ancaman siber. Jika Anda adalah ahli keamanan siber, daftar sekarang!',location:'Yogyakarta',postdate_at:currentDate,},
    {title:'Insinyur Komputasi Awan',description:'Bergabunglah dengan tim kami sebagai Insinyur Komputasi Awan dan kerjakan teknologi awan terkini. Daftar jika Anda passionate tentang komputasi awan.',location:'Bali',postdate_at:currentDate, },
  ]);
};
