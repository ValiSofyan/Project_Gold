/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('UserCorpData').del()
  await knex('UserCorpData').insert([
    {username: 'PT Maju Jaya Corporindo',password:'12345MyPass',website:'MajuJayaCorporindo.com',registered_at:currentDate,updated_at:currentDate},
    {username: 'PT Harapan Sentosa Group',password:'SunnyDay22',website:'HarapanSentosaGroup.com',registered_at:currentDate,updated_at:currentDate},
    {username: 'PT Sejahtera Makmur Abadi',password:'PizzaLover7',website:'SejahteraMakmurAbadi.com',registered_at:currentDate,updated_at:currentDate}
  ]);
};




