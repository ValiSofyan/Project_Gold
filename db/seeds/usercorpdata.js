/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('UserCorpData').del()
  await knex('UserCorpData').insert([
    {
      username: 'PT Maju Jaya Corporindo',
      password: '12345MyPass',
      website: 'MajuJayaCorporindo.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Harapan Sentosa Group',
      password: 'SunnyDay22',
      website: 'HarapanSentosaGroup.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Sejahtera Makmur Abadi',
      password: 'PizzaLover7',
      website: 'SejahteraMakmurAbadi.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Gemilang Teknologi Indonesia',
      password: 'Hiking2021',
      website: 'GemilangTeknologiIndonesia.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Bersama Tunggal Perkasa',
      password: 'Choc0lateCake',
      website: 'BersamaTunggalPerkasa.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Anugerah Prima Sejahtera',
      password: 'CatL0ver123',
      website: 'AnugerahPrimaSejahtera.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Cahaya Cipta Nusantara',
      password: 'SoccerFan99',
      website: 'CahayaCiptaNusantara.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Sentral Investama Lestari',
      password: 'B3autifulDay',
      website: 'SentralInvestamaLestari.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Mega Persada Group',
      password: 'ReadingBooks4',
      website: 'MegaPersadaGroup.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Jaya Surya Agung',
      password: 'MusicRocks5',
      website: 'jayaSuryaAgung.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Harmoni Makmur Sejahtera',
      password: 'HappySmile88',
      website: 'HarmoniMakmurSejahtera.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Mutiara Sejahtera Jaya',
      password: 'C00kingTime',
      website: 'MutiaraSejahteraJaya.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Berkah Abadi Teknologi',
      password: 'Travel2023',
      website: 'BerkahAbadiTeknologi.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Mitra Sukses Nusantara',
      password: 'GreenGrass77',
      website: 'MitraSuksesNusantara.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Indah Lestari Sejahtera',
      password: 'Dance4Fun!',
      website: 'IndahLestariSejahtera.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Cipta Jaya Sentosa',
      password: '1Lov3Family',
      website: 'CiptaJayaSentosa.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Prima Harmoni Cipta',
      password: 'BeachDay22',
      website: 'PrimaHarmoniCipta.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Bina Sejahtera Nusantara',
      password: 'W1nterSnow7',
      website: 'BinaSejahteraNusantara.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Jaya Cipta Sentosa',
      password: 'H3lloWorld99',
      website: 'JayaCiptaSentosa.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      username: 'PT Mandiri Gemilang Group',
      password: 'Creat1veMind3d',
      website: 'MandiriGemilangGroup.com',
      registered_at: currentDate,
      updated_at: currentDate
    } 
  ]);
};

console.log();


