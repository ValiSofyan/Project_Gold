/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const currentDate = new Date()

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('joblisting').del()
  await knex('joblisting').insert([
  

        {
            title: 'Software Engineer',
            description: 'Kami mencari Software Engineer terampil untuk bergabung dengan tim kami. Jika Anda memiliki pengalaman dalam pemrograman dan koding, segera daftar sekarang!',
            location: 'Bandung',
            postdate_at: currentDate,
            company_id: 21,
            skilldata_id: 21,
        },
        {
            title: 'Ahli Keamanan Siber',
            description: 'Kami sedang mencari Ahli Keamanan Siber untuk melindungi sistem kami dari ancaman siber. Jika Anda adalah ahli keamanan siber, daftar sekarang!',
            location: 'Yogyakarta',
            postdate_at: currentDate,
            company_id: 22,
            skilldata_id: 24,
        },
        {
            title: 'Insinyur Komputasi Awan',
            description: 'Bergabunglah dengan tim kami sebagai Insinyur Komputasi Awan dan kerjakan teknologi awan terkini. Daftar jika Anda passionate tentang komputasi awan.',
            location: 'Bali',
            postdate_at: currentDate,
            company_id: 23,
            skilldata_id: 25,
        },
        {
            title: 'Insinyur Pembelajaran Mesin dan Kecerdasan Buatan',
            description: 'Kami mencari Insinyur Pembelajaran Mesin untuk bekerja pada proyek kecerdasan buatan. Daftar sekarang jika Anda ahli dalam ML and AI!',
            location: 'Semarang',
            postdate_at: currentDate,
            company_id: 24,
            skilldata_id: 26,
        },
        {
            title: 'Administrator Jaringan',
            description: 'Kami memiliki lowongan untuk Administrator Jaringan yang akan merawat infrastruktur jaringan kami. Daftar sekarang jika Anda memiliki keterampilan jaringan.',
            location: 'Malang',
            postdate_at: currentDate,
            company_id: 25,
            skilldata_id: 28,
        },
        {
            title: 'Desainer UI/UX',
            description: 'Kami mencari Desainer UI/UX kreatif untuk bekerja pada desain yang ramah pengguna. Daftar sekarang jika Anda bersemangat tentang desain.',
            location: 'Bekasi',
            postdate_at: currentDate,
            company_id: 26,
            skilldata_id: 31,
        },
        {
            title: 'Pengembang Blockchain',
            description: 'Kami mencari Pengembang Blockchain untuk bekerja pada aplikasi blockchain. Daftar jika Anda memiliki keterampilan pengembangan blockchain.',
            location: 'Cikarang',
            postdate_at: currentDate,
            company_id: 27,
            skilldata_id: 35,
        },
        {
            title: 'Pengembang Web',
            description: 'Kami memiliki lowongan untuk Pengembang Web yang akan bekerja pada proyek web menarik. Daftar jika Anda memiliki keahlian dalam pengembangan web.',
            location: 'Tangerang',
            postdate_at: currentDate,
            company_id: 28,
            skilldata_id: 22,
        },
        {
            title: 'Analis Data',
            description: 'Apakah Anda passionate tentang analisis data? Bergabunglah dengan tim kami sebagai Analis Data dan bantu kami mengambil keputusan berdasarkan data.',
            location: 'Karawang',
            postdate_at: currentDate,
            company_id: 29,
            skilldata_id: 23,
        },
        {
            title: 'Administrator Basis Data',
            description: 'Bergabunglah dengan tim kami sebagai Administrator Basis Data dan kelola sistem data yang penting. Daftar jika Anda memiliki keterampilan DBA.',
            location: 'Jakarta',
            postdate_at: currentDate,
            company_id: 30,
            skilldata_id: 27,
        },
        {
            title: 'Insinyur DevOps',
            description: 'Bergabunglah dengan tim kami sebagai Insinyur DevOps and bantu kami mengotomatisasi dan menyederhanakan proses pengembangan dan implementasi.',
            location: 'Bandung',
            postdate_at: currentDate,
            company_id: 31,
            skilldata_id: 29,
        },
        {
            title: 'Pengembang Aplikasi Seluler',
            description: 'Apakah Anda seorang Pengembang Aplikasi Seluler berbakat? Bergabunglah dengan kami untuk membuat aplikasi seluler yang luar biasa. Daftar sekarang!',
            location: 'Yogyakarta',
            postdate_at: currentDate,
            company_id: 32,
            skilldata_id: 30,
        },
        {
            title: 'Insinyur Robotika',
            description: 'Bergabunglah dengan tim robotika kami sebagai Insinyur Robotika and kerjakan proyek-proyek menarik. Daftar jika Anda memiliki latar belakang dalam robotika.',
            location: 'Bali',
            postdate_at: currentDate,
            company_id: 33,
            skilldata_id: 32,
        },
        {
            title: 'Editor Video dan Audio',
            description: 'Kami memiliki lowongan untuk Editor Video and Audio yang akan membuat konten multimedia yang menarik. Daftar jika Anda memiliki keterampilan editing.',
            location: 'Semarang',
            postdate_at: currentDate,
            company_id: 34,
            skilldata_id: 36,
        },
        {
            title: 'Spesialis Pencetakan 3D',
            description: 'Kami memiliki lowongan untuk Spesialis Pencetakan 3D yang akan bekerja dengan teknologi pencetakan 3D canggih. Daftar jika Anda terampil dalam pencetakan 3D.',
            location: 'Malang',
            postdate_at: currentDate,
            company_id: 35,
            skilldata_id: 33,
        },
        {
            title: 'Pengembang IoT',
            description: 'Bergabunglah dengan tim kami sebagai Pengembang IoT and kerjakan proyek Internet of Things yang inovatif. Daftar sekarang jika Anda bersemangat tentang IoT.',
            location: 'Bekasi',
            postdate_at: currentDate,
            company_id: 36,
            skilldata_id: 34,
        },
        {
            title: 'Desainer Grafis',
            description: 'Apakah Anda seorang Desainer Grafis berbakat? Bergabunglah dengan kami untuk membuat desain yang visual menarik. Daftar sekarang!',
            location: 'Cikarang',
            postdate_at: currentDate,
            company_id: 37,
            skilldata_id: 37,
        },
        {
            title: 'Desainer CAD',
            description: 'Bergabunglah dengan tim kami sebagai Desainer CAD and kerjakan proyek desain berbantu komputer. Daftar jika Anda memiliki keterampilan CAD.',
            location: 'Tangerang',
            postdate_at: currentDate,
            company_id: 38,
            skilldata_id: 38,
        },
        {
            title: 'Spesialis Sistem ERP',
            description: 'Kami sedang mencari Spesialis Sistem ERP untuk mengelola sistem perencanaan sumber daya perusahaan kami. Jika Anda adalah ahli ERP, daftar sekarang!',
            location: 'Karawang',
            postdate_at: currentDate,
            company_id: 39,
            skilldata_id: 39,
        },
        {
            title: 'Pengembang VR/AR',
            description: 'Bergabunglah dengan tim kami sebagai Pengembang VR/AR and kerjakan proyek realitas virtual dan augmented reality yang menarik. Daftar sekarang!',
            location: 'Jakarta',
            postdate_at: currentDate,
            company_id: 40,
            skilldata_id: 40,
        },
  ]);
}; 
