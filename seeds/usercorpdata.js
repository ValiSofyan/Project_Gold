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
      userNameCorp: 'PT Maju Jaya Corporindo',
      password: '12345MyPass',
      website: 'MajuJayaCorporindo.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Harapan Sentosa Group',
      password: 'SunnyDay22',
      website: 'HarapanSentosaGroup.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Sejahtera Makmur Abadi',
      password: 'PizzaLover7',
      website: 'SejahteraMakmurAbadi.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Gemilang Teknologi Indonesia',
      password: 'Hiking2021',
      website: 'GemilangTeknologiIndonesia.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Bersama Tunggal Perkasa',
      password: 'Choc0lateCake',
      website: 'BersamaTunggalPerkasa.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Anugerah Prima Sejahtera',
      password: 'CatL0ver123',
      website: 'AnugerahPrimaSejahtera.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Cahaya Cipta Nusantara',
      password: 'SoccerFan99',
      website: 'CahayaCiptaNusantara.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Sentral Investama Lestari',
      password: 'B3autifulDay',
      website: 'SentralInvestamaLestari.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Mega Persada Group',
      password: 'ReadingBooks4',
      website: 'MegaPersadaGroup.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Jaya Surya Agung',
      password: 'MusicRocks5',
      website: 'jayaSuryaAgung.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Harmoni Makmur Sejahtera',
      password: 'HappySmile88',
      website: 'HarmoniMakmurSejahtera.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Mutiara Sejahtera Jaya',
      password: 'C00kingTime',
      website: 'MutiaraSejahteraJaya.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Berkah Abadi Teknologi',
      password: 'Travel2023',
      website: 'BerkahAbadiTeknologi.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Mitra Sukses Nusantara',
      password: 'GreenGrass77',
      website: 'MitraSuksesNusantara.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Indah Lestari Sejahtera',
      password: 'Dance4Fun!',
      website: 'IndahLestariSejahtera.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Cipta Jaya Sentosa',
      password: '1Lov3Family',
      website: 'CiptaJayaSentosa.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Prima Harmoni Cipta',
      password: 'BeachDay22',
      website: 'PrimaHarmoniCipta.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Bina Sejahtera Nusantara',
      password: 'W1nterSnow7',
      website: 'BinaSejahteraNusantara.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Jaya Cipta Sentosa',
      password: 'H3lloWorld99',
      website: 'JayaCiptaSentosa.com',
      registered_at: currentDate,
      updated_at: currentDate
    },
    {
      userNameCorp: 'PT Mandiri Gemilang Group',
      password: 'Creat1veMind3d',
      website: 'MandiriGemilangGroup.com',
      registered_at: currentDate,
      updated_at: currentDate
    } 
  ]);
};




