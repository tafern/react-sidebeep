import seeder from '@cleverbeagle/seeder/index.min';
import Products from '../../../../../api/Product/Product';
import Images from '../../../../../api/Images/Images';
import Files from '../../../../../api/File/File';

const imageSeed = (userId, imgUrl, idOfFile) => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            fileId: idOfFile,
            imgUrl,
          };
        },
      },
    },
  });
};

export const mauKemanaSiDisplayPictureFileSeed = (userId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refId: userId,
            refType: 'ProfilePicture',
            dependentData(fileId) {
              imageSeed(userId, '/assets/mau_kemana_si/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const mauKemanaSiProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG70000',
          fileId: 'PFPRDCOVER100000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG70000',
          fileId: 'PFPRDCOVER200000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_products/cover_product_2.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG70000',
          fileId: 'PFPRDCOVER300000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_products/cover_product_3.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG70000',
          fileId: 'PFPRDCOVER400000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_products/cover_product_4.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG70000',
          fileId: 'PFPRDCOVER500000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_products/cover_product_5.jpeg',
        },
      ],
    },
  });
};

export const mauKemanaSiProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRDCOVER100000ORG70000',
          refId: 'PRD100000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG70000',
              fileId: 'PFPRDCOVER100000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_products/cover_product_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER200000ORG70000',
          refId: 'PRD200000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG70000',
              fileId: 'PFPRDCOVER200000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_products/cover_product_2.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER300000ORG70000',
          refId: 'PRD300000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG70000',
              fileId: 'PFPRDCOVER300000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_products/cover_product_3.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER400000ORG70000',
          refId: 'PRD400000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG70000',
              fileId: 'PFPRDCOVER400000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_products/cover_product_4.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER500000ORG70000',
          refId: 'PRD500000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG70000',
              fileId: 'PFPRDCOVER500000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_products/cover_product_5.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const mauKemanaSiProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG70000',
          fileId: 'PFPRD100000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG70000',
          fileId: 'PFPRD200000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI30000ORG70000',
          fileId: 'PFPRD300000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_3.jpeg',
        },
        {
          _id: 'PRDI40000ORG70000',
          fileId: 'PFPRD400000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_4.jpeg',
        },
        {
          _id: 'PRDI50000ORG70000',
          fileId: 'PFPRD500000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_5.jpeg',
        },
      ],
    },
  });
};

export const mauKemanaSiProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRD100000ORG70000',
          refId: 'PRD100000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG70000',
              fileId: 'PFPRD100000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD200000ORG70000',
          refId: 'PRD200000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG70000',
              fileId: 'PFPRD200000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_2.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD300000ORG70000',
          refId: 'PRD300000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG70000',
              fileId: 'PFPRD300000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_3.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD400000ORG70000',
          refId: 'PRD400000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG70000',
              fileId: 'PFPRD400000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_4.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD500000ORG70000',
          refId: 'PRD500000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG70000',
              fileId: 'PFPRD500000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_5.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const mauKemanaSiProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG70000',
          userId,
          name: 'One Day Trip 3 Pulau & Lampion Party',
          description:
            '2 Des 2018 9 Des 2018 25 Des 2018 Price Include: 1. Perahu Muara kamal - Pulau [ PP ] 2.Tiket Retribusi Pulau Kelor 3.Tiket Retribusi Pulau Onrust 4.Tiket Retribusi Pulau Cipir 5.Guide Lokal & Tour Leader 6.Lampion / Sky Lantern 7.Free poto 8. floaties 9.laybag 10.Tiket peron 11.Tips leader 12. Pelampung Price Exclude: - Water sport (banana boat dan donut boat) - Makan siang Meeting Point: Gedung Biru Dermaga Muara Kamal (search on Google Maps) . Hari 1 08.30 : Meeting point Dermaga Muara Kamal 09.00 : Persiapan berangkat menuju Pulau Kelor 10:00 : Tiba di pulau Kelor, acara bebas, Explore Benteng Martello 11:30 : Berangkat menuju Pulau Onrust 12.00 : Tiba di pulau onrust, wisata sejarah keliling pulau, foto-foto dan ISHOMA 15.00 : Perjalanan Menuju Pulau cipir 15.30 : Tiba di Pulau Cipir acara bebas, Berenang, Catch sunset 18.00 : Penerbangan Lampion 18.30 : Kembali ke Dermaga dan trip selesai Note : Waktu dapat berubah menyesuaikan dengan kondisi lapangan.',
          price: '85000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
        {
          _id: 'PRD200000ORG70000',
          userId,
          name: 'Open Trip Dieng Negeri Diatas Awan (3D2N)',
          description:
            '30-2 DESEMBER 2018 21-23 DESEMBER 2018 Meeting Point : Jakarta : Plaza Semanggi, Lobby Utara depan Maxx corner jam 19.00 Bekasi : SPBU Pertamina sebelah Giant Bekasi depan Brightmart jam 20.00 Include : 1. Transportasi Standar Pariwisata AC Jakarta - Dieng PP include driver, bbm, tol dan parkir 2. Makan 3x 3. Penginapan Homestay (sharing room, 3-4 orang/kamar) 4. Tiket Masuk Semua Destinasi (Dieng, Candi Arjuna, Kawah Sikidang, Batu Ratapan Angin, Dieng Teater, Golden Sunrise Puncak Sikunir, dan Tuk Bimo Lukar) 5. Dokumentasi 6. Tour Leader Mau Kemana Si 7. Guide Lokal Dieng . Exclude : 1. Kebutuhan pribadi 2. Makan diluar paket 3. Tips Driver Note : Untuk itinerary bisa langsung chat yaa',
          price: '590000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
        {
          _id: 'PRD300000ORG70000',
          userId,
          name: 'Open Trip Pahawang Start Jakarta (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START JAKARTA MEETING POINT : Plaza Semanggi Lobby Utara Depan Maxx Corner jam 20.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
          price: '625000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
        {
          _id: 'PRD400000ORG70000',
          userId,
          name: 'Open Trip Pahawang Start Merak (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START MERAK MEETING POINT : ALFAMART Pelabuhan Merak jam 23.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
          price: '450000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
        {
          _id: 'PRD500000ORG70000',
          userId,
          name: 'Open Trip Peucang Start Jakarta (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) MEETING POINT : PLAZA SEMANGGI Lobby Utara Depan Maxx Corner Jam 20.00 Include : - Transportasi dari Meeting Point PP ke Desa Sumur - makan 5x (bbq 1x) - kapal wisata 2hari - air mineral selama tour - penginapan di peucang - guide - dokumentasi Underwater dan uppwater - asuransi TNUK - semua tiket wisata - restribusi wisata #tambahan - teh gula & kopi - buah setelah snorkling 1 - dokumentasi drone - Floaties foto2 . Excluding: - canoeing sungai cigenteur (idr. 50.000/pax) - alat snorkling: Idr. 80.000/org (lengkap dengan fin) - pengeluaran pribadi - tips guide (suka rela) - hal-hal selain di atas *penginapan pasti di pulau peucangnya *dokumentasi underwater gopro hero Destinasi tujuan wisata: (tracking and hoping island) Pulau Peucang, cidaon, Karang copong, Pulau Badul, Handeleum, sungai cigenteur (spot snorkling) Ciapus, suminoh, citerjun, lagoon kobak, pulau badul, pulau oar',
          price: '690000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
      ],
    },
  });
};
