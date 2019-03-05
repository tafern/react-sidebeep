import seeder from '@cleverbeagle/seeder/index.min';
import Org from '../../../api/Org/Org';
import File from '../../../api/File/File';
import Product from '../../../api/Product/Product';
import Location from '../../../api/Location/Location';

const userCoverSeed = (userId) => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: userId,
            type: 'User',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/logo_vendor.jpeg',
        },
      ],
    },
  });
};

export const orgImageCoverSeed = (orgId) => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: orgId,
            type: 'Org',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/logo_vendor.jpg',
        },
      ],
    },
  });
};

export const orgProductImagePortfolioSeed = () => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: 'PRD100000ORG70000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG70000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_portfolio/portfolio_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG70000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_portfolio/portfolio_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG70000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_portfolio/portfolio_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG70000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_portfolio/portfolio_5.jpeg',
        },
      ],
    },
  });
};

export const orgProductImageCoverSeed = () => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: 'PRD100000ORG70000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG70000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_products/cover_product_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG70000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_products/cover_product_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG70000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_products/cover_product_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG70000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/mau_kemana_si/_products/cover_product_5.jpeg',
        },
      ],
    },
  });
};

export const orgProductSeed = (orgId) => {
  seeder(Product, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG70000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          name: 'One Day Trip 3 Pulau & Lampion Party',
          description:
            '2 Des 2018 9 Des 2018 25 Des 2018 Price Include: 1. Perahu Muara kamal - Pulau [ PP ] 2.Tiket Retribusi Pulau Kelor 3.Tiket Retribusi Pulau Onrust 4.Tiket Retribusi Pulau Cipir 5.Guide Lokal & Tour Leader 6.Lampion / Sky Lantern 7.Free poto 8. floaties 9.laybag 10.Tiket peron 11.Tips leader 12. Pelampung Price Exclude: - Water sport (banana boat dan donut boat) - Makan siang Meeting Point: Gedung Biru Dermaga Muara Kamal (search on Google Maps) . Hari 1 08.30 : Meeting point Dermaga Muara Kamal 09.00 : Persiapan berangkat menuju Pulau Kelor 10:00 : Tiba di pulau Kelor, acara bebas, Explore Benteng Martello 11:30 : Berangkat menuju Pulau Onrust 12.00 : Tiba di pulau onrust, wisata sejarah keliling pulau, foto-foto dan ISHOMA 15.00 : Perjalanan Menuju Pulau cipir 15.30 : Tiba di Pulau Cipir acara bebas, Berenang, Catch sunset 18.00 : Penerbangan Lampion 18.30 : Kembali ke Dermaga dan trip selesai Note : Waktu dapat berubah menyesuaikan dengan kondisi lapangan.',
          price: '85000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG70000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          name: 'Open Trip Dieng Negeri Diatas Awan (3D2N)',
          description:
            '30-2 DESEMBER 2018 21-23 DESEMBER 2018 Meeting Point : Jakarta : Plaza Semanggi, Lobby Utara depan Maxx corner jam 19.00 Bekasi : SPBU Pertamina sebelah Giant Bekasi depan Brightmart jam 20.00 Include : 1. Transportasi Standar Pariwisata AC Jakarta - Dieng PP include driver, bbm, tol dan parkir 2. Makan 3x 3. Penginapan Homestay (sharing room, 3-4 orang/kamar) 4. Tiket Masuk Semua Destinasi (Dieng, Candi Arjuna, Kawah Sikidang, Batu Ratapan Angin, Dieng Teater, Golden Sunrise Puncak Sikunir, dan Tuk Bimo Lukar) 5. Dokumentasi 6. Tour Leader Mau Kemana Si 7. Guide Lokal Dieng . Exclude : 1. Kebutuhan pribadi 2. Makan diluar paket 3. Tips Driver Note : Untuk itinerary bisa langsung chat yaa',
          price: '590000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD300000ORG70000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          name: 'Open Trip Pahawang Start Jakarta (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START JAKARTA MEETING POINT : Plaza Semanggi Lobby Utara Depan Maxx Corner jam 20.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
          price: '625000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD400000ORG70000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          name: 'Open Trip Pahawang Start Merak (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START MERAK MEETING POINT : ALFAMART Pelabuhan Merak jam 23.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
          price: '450000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD500000ORG70000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          name: 'Open Trip Peucang Start Jakarta (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) MEETING POINT : PLAZA SEMANGGI Lobby Utara Depan Maxx Corner Jam 20.00 Include : - Transportasi dari Meeting Point PP ke Desa Sumur - makan 5x (bbq 1x) - kapal wisata 2hari - air mineral selama tour - penginapan di peucang - guide - dokumentasi Underwater dan uppwater - asuransi TNUK - semua tiket wisata - restribusi wisata #tambahan - teh gula & kopi - buah setelah snorkling 1 - dokumentasi drone - Floaties foto2 . Excluding: - canoeing sungai cigenteur (idr. 50.000/pax) - alat snorkling: Idr. 80.000/org (lengkap dengan fin) - pengeluaran pribadi - tips guide (suka rela) - hal-hal selain di atas *penginapan pasti di pulau peucangnya *dokumentasi underwater gopro hero Destinasi tujuan wisata: (tracking and hoping island) Pulau Peucang, cidaon, Karang copong, Pulau Badul, Handeleum, sungai cigenteur (spot snorkling) Ciapus, suminoh, citerjun, lagoon kobak, pulau badul, pulau oar',
          price: '690000',
          viewCount: '22',
          orderCount: '13',
        },
      ],
    },
  });
};

const orgLocationSeed = (orgId) => {
  seeder(Location, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
          type: 'Office',
          status: 'Active',
        },
      ],
    },
  });
};

export const mauKemanaSiSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG70000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/mau_kemana_si/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          members: [
            {
              _id: userId,
              email: 'mau_kemana_si@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Mau Kemana',
                  last: 'Si',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG70000',
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              name: 'One Day Trip 3 Pulau & Lampion Party',
              description:
                '2 Des 2018 9 Des 2018 25 Des 2018 Price Include: 1. Perahu Muara kamal - Pulau [ PP ] 2.Tiket Retribusi Pulau Kelor 3.Tiket Retribusi Pulau Onrust 4.Tiket Retribusi Pulau Cipir 5.Guide Lokal & Tour Leader 6.Lampion / Sky Lantern 7.Free poto 8. floaties 9.laybag 10.Tiket peron 11.Tips leader 12. Pelampung Price Exclude: - Water sport (banana boat dan donut boat) - Makan siang Meeting Point: Gedung Biru Dermaga Muara Kamal (search on Google Maps) . Hari 1 08.30 : Meeting point Dermaga Muara Kamal 09.00 : Persiapan berangkat menuju Pulau Kelor 10:00 : Tiba di pulau Kelor, acara bebas, Explore Benteng Martello 11:30 : Berangkat menuju Pulau Onrust 12.00 : Tiba di pulau onrust, wisata sejarah keliling pulau, foto-foto dan ISHOMA 15.00 : Perjalanan Menuju Pulau cipir 15.30 : Tiba di Pulau Cipir acara bebas, Berenang, Catch sunset 18.00 : Penerbangan Lampion 18.30 : Kembali ke Dermaga dan trip selesai Note : Waktu dapat berubah menyesuaikan dengan kondisi lapangan.',
              price: '85000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG70000',
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              name: 'Open Trip Dieng Negeri Diatas Awan (3D2N)',
              description:
                '30-2 DESEMBER 2018 21-23 DESEMBER 2018 Meeting Point : Jakarta : Plaza Semanggi, Lobby Utara depan Maxx corner jam 19.00 Bekasi : SPBU Pertamina sebelah Giant Bekasi depan Brightmart jam 20.00 Include : 1. Transportasi Standar Pariwisata AC Jakarta - Dieng PP include driver, bbm, tol dan parkir 2. Makan 3x 3. Penginapan Homestay (sharing room, 3-4 orang/kamar) 4. Tiket Masuk Semua Destinasi (Dieng, Candi Arjuna, Kawah Sikidang, Batu Ratapan Angin, Dieng Teater, Golden Sunrise Puncak Sikunir, dan Tuk Bimo Lukar) 5. Dokumentasi 6. Tour Leader Mau Kemana Si 7. Guide Lokal Dieng . Exclude : 1. Kebutuhan pribadi 2. Makan diluar paket 3. Tips Driver Note : Untuk itinerary bisa langsung chat yaa',
              price: '590000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD300000ORG70000',
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              name: 'Open Trip Pahawang Start Jakarta (3D2N)',
              description:
                'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START JAKARTA MEETING POINT : Plaza Semanggi Lobby Utara Depan Maxx Corner jam 20.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
              price: '625000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD400000ORG70000',
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              name: 'Open Trip Pahawang Start Merak (3D2N)',
              description:
                'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START MERAK MEETING POINT : ALFAMART Pelabuhan Merak jam 23.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
              price: '450000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD500000ORG70000',
              owner: {
                _id: 'ORG70000',
                type: 'Org',
                fullname: 'Mau Kemana Si',
                url: '/assets/mau_kemana_si/logo_vendor.jpeg',
              },
              name: 'Open Trip Peucang Start Jakarta (3D2N)',
              description:
                'EVERY WEEKEND (SETIAP JUMAT-MINGGU) MEETING POINT : PLAZA SEMANGGI Lobby Utara Depan Maxx Corner Jam 20.00 Include : - Transportasi dari Meeting Point PP ke Desa Sumur - makan 5x (bbq 1x) - kapal wisata 2hari - air mineral selama tour - penginapan di peucang - guide - dokumentasi Underwater dan uppwater - asuransi TNUK - semua tiket wisata - restribusi wisata #tambahan - teh gula & kopi - buah setelah snorkling 1 - dokumentasi drone - Floaties foto2 . Excluding: - canoeing sungai cigenteur (idr. 50.000/pax) - alat snorkling: Idr. 80.000/org (lengkap dengan fin) - pengeluaran pribadi - tips guide (suka rela) - hal-hal selain di atas *penginapan pasti di pulau peucangnya *dokumentasi underwater gopro hero Destinasi tujuan wisata: (tracking and hoping island) Pulau Peucang, cidaon, Karang copong, Pulau Badul, Handeleum, sungai cigenteur (spot snorkling) Ciapus, suminoh, citerjun, lagoon kobak, pulau badul, pulau oar',
              price: '690000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG70000',
            type: 'Org',
            fullname: 'Mau Kemana Si',
            url: '/assets/mau_kemana_si/logo_vendor.jpeg',
          },
          type: 'Channel',
          status: 'Active',
          dependentData(orgId) {
            userCoverSeed(orgId);
            orgImageCoverSeed(orgId);
            orgProductSeed(orgId);
            orgProductImageCoverSeed();
            orgProductImagePortfolioSeed();
            orgLocationSeed(orgId);
          },
        },
      ],
    },
  });
};

export default mauKemanaSiSeed;
