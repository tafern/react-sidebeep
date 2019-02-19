import seeder from '@cleverbeagle/seeder/index.min';
import Orgs from '../../../../api/Orgs/Orgs';
import Images from '../../../../api/Images/Images';
import Files from '../../../../api/Files/Files';
import Locations from '../../../../api/Locations/Locations';

export const orgImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'OI10000',
          fileId: 'OF10000',
          imgUrl: '/assets/cay_cay/logo_vendor.jpg',
        },
        {
          _id: 'OI20000',
          fileId: 'OF20000',
          imgUrl: '/assets/kaizen/logo_vendor.jpg',
        },
        {
          _id: 'OI30000',
          fileId: 'OF30000',
          imgUrl: '/assets/katros_garage/logo_vendor.jpg',
        },
        {
          _id: 'OI40000',
          fileId: 'OF40000',
          imgUrl: '/assets/laba_laba/logo_vendor.jpg',
        },
        {
          _id: 'OI50000',
          fileId: 'OF50000',
          imgUrl: '/assets/les_elite/logo_vendor.jpg',
        },
        {
          _id: 'OI60000',
          fileId: 'OF60000',
          imgUrl: '/assets/lestari_tattoo/logo_vendor.jpg',
        },
        {
          _id: 'OI70000',
          fileId: 'OF70000',
          imgUrl: '/assets/mau_kemana_si/logo_vendor.jpg',
        },
        {
          _id: 'OI80000',
          fileId: 'OF80000',
          imgUrl: '/assets/shoes_and_care/logo_vendor.jpg',
        },
      ],
    },
  });
};

export const orgFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'OF10000',
          refId: 'ORG10000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI10000',
              fileId: 'OF10000',
              imgUrl: '/assets/cay_cay/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF20000',
          refId: 'ORG20000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI20000',
              fileId: 'OF20000',
              imgUrl: '/assets/kaizen/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF30000',
          refId: 'ORG30000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI30000',
              fileId: 'OF30000',
              imgUrl: '/assets/katros_garage/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF40000',
          refId: 'ORG40000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI40000',
              fileId: 'OF40000',
              imgUrl: '/assets/laba_laba/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF50000',
          refId: 'ORG50000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI50000',
              fileId: 'OF50000',
              imgUrl: '/assets/les_elite/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF60000',
          refId: 'ORG60000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI60000',
              fileId: 'OF60000',
              imgUrl: '/assets/lestari_tattoo/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF70000',
          refId: 'ORG70000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI70000',
              fileId: 'OF70000',
              imgUrl: '/assets/mau_kemana_si/logo_vendor.jpg',
            },
          ],
        },
        {
          _id: 'OF80000',
          refId: 'ORG80000',
          refType: 'PictureProfile',
          images: [
            {
              _id: 'OI80000',
              fileId: 'OF80000',
              imgUrl: '/assets/shoes_and_care/logo_vendor.jpg',
            },
          ],
        },
      ],
    },
  });
};

export const orgLocationsSeed = () => {
  seeder(Locations, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'OL10000',
          orgId: 'ORG10000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL20000',
          orgId: 'ORG20000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL30000',
          orgId: 'ORG30000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL40000',
          orgId: 'ORG40000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL50000',
          orgId: 'ORG50000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL60000',
          orgId: 'ORG60000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL70000',
          orgId: 'ORG70000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
        {
          _id: 'OL80000',
          orgId: 'ORG80000',
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
        },
      ],
    },
  });
};

export const orgsSeed = () => {
  seeder(Orgs, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG10000',
          name: 'Cay Cay',
          description: 'This Is About Cay Cay',
          files: [
            {
              _id: 'OF10000',
              refId: 'ORG10000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI10000',
                  fileId: 'OF10000',
                  imgUrl: '/assets/cay_cay/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL10000',
              orgId: 'ORG10000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG10000',
              userId: 'USR10000',
              name: 'Promo #Berimlek 3D Haircut By Anash',
              description:
                'Promo Rp 325.000,- disc.50% --> Rp 162.500,-. Haircut dengan teknik 3D. Sudah termasuk cuci + blow',
              price: '162500',
              viewCount: '12',
              orderCount: '33',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
            {
              _id: 'PRD200000ORG10000',
              userId: 'USR10000',
              name: 'Haircut By Alex',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '325000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
            {
              _id: 'PRD300000ORG10000',
              userId: 'USR10000',
              name: 'Haircut By Yusri',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '325000',
              viewCount: '52',
              orderCount: '23',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
            {
              _id: 'PRD400000ORG10000',
              userId: 'USR10000',
              name: 'Haircut By Poniman',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '230000',
              viewCount: '52',
              orderCount: '23',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
            {
              _id: 'PRD500000ORG10000',
              userId: 'USR10000',
              name: 'Haircut By Budi',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '230000',
              viewCount: '12',
              orderCount: '13',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
            {
              _id: 'PRD600000ORG10000',
              userId: 'USR10000',
              name: 'Haircut By Susi',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '230000',
              viewCount: '12',
              orderCount: '13',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
          ],
        },
        {
          _id: 'ORG20000',
          name: 'Kaizen',
          description:
            'PROMO MENARIK UNTUK PARA CUSTOMER!! GUNAKAN KODE VOCHER 50K UNTUK MENDAPATKAN JASA INI DARI 130K MENJADI 80K!! Tidak berlaku untuk weekend.',
          files: [
            {
              _id: 'OF20000',
              refId: 'ORG20000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI20000',
                  fileId: 'OF20000',
                  imgUrl: '/assets/kaizen/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL20000',
              orgId: 'ORG20000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG20000',
              userId: 'USR20000',
              name: 'Promo Pijat Tradisional 1 (POTONGAN 50K)',
              description:
                'Gunakan kode voucher SIDEBEEPKAIZEN untuk mendapatkan jasa ini dari 130K menjadi hanya 80K !!',
              price: '130000',
              viewCount: '12',
              orderCount: '33',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
            {
              _id: 'PRD200000ORG20000',
              userId: 'USR20000',
              name: 'Face Accupresure',
              description: 'This is description about Face Accupresure.',
              price: '170000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: '﻿CAT30000',
                  name: 'Beauty',
                },
              ],
            },
          ],
        },
        {
          _id: 'ORG30000',
          name: 'Katros Garage',
          description:
            'The Katros Motorcycles merupakan bengkel modifikasi motor yang siap membantu keinginan Anda memiliki motor custom melalui improvisasi ide-ide kreatif dalam setiap proses pembuatannya. Lebih dari itu, The Katros Garage merupakan layanan jasa yang menyatukan gaya hidup dengan motor custom. Lewat aplikasi Sidebeep Anda bisa mendapatkan jasa konsultasi seputar custom motor dan memiliki hasil karya The Katros Garage khusus custom motor Kawasaki W 175.',
          files: [
            {
              _id: 'OF30000',
              refId: 'ORG30000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI30000',
                  fileId: 'OF30000',
                  imgUrl: '/assets/katros_garage/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL30000',
              orgId: 'ORG30000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG30000',
              userId: 'USR30000',
              name: 'Custom Motor Kawasaki W175 Stage 1',
              description:
                'Kustom motor khusus untuk Kawasaki W175 step 1 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting). - Stoplamp & Breket - Jok (by request) - Katros Muffler (Full System)',
              price: '4350000',
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
              _id: 'PRD200000ORG30000',
              userId: 'USR30000',
              name: 'Custom Motor Kawasaki W175 Stage 2',
              description:
                'Jasa Kustom Motor Kawasaki W175 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by request) - Katros Muffler (full sistem) - Skidplate & Breket - Cover Carvurator & Breket - Ban (lokal) - Stoplamp & Breket.',
              price: '6350000',
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
              _id: 'PRD300000ORG30000',
              userId: 'USR30000',
              name: 'Custom Motor Kawasaki W175 Stage 3',
              description:
                'Jasa Kustom Motor Kawasaki W175 stage 3 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by reguest) - Katros Muffler (Full Sistem) - Skidplate & Breket - Cover Carburator - Ban (lokal) - Lampu depan 5.75 inch & Breket - Lampu Sein & Breket - Lampu Stop & Breket - Spidometer & Breket - Handgrip - Setang - Spion - Sok Breker Belakang 340mm.',
              price: '9000000',
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
        {
          _id: 'ORG40000',
          name: 'Laba Laba',
          description:
            'We reparasi segala. We will try our best to cater to your needs. Please do not hesitate to ask us should you need to enquire about other service.',
          files: [
            {
              _id: 'OF40000',
              refId: 'ORG40000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI40000',
                  fileId: 'OF40000',
                  imgUrl: '/assets/laba_laba/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL40000',
              orgId: 'ORG40000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG40000',
              userId: 'USR40000',
              name: 'Wheel Missing',
              description: 'Estimate Price : Rp 125.000 - Rp 250.000',
              price: '125000',
              viewCount: '12',
              orderCount: '33',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD200000ORG40000',
              userId: 'USR40000',
              name: "Zipper's Head",
              description: 'Estimate Price : Rp 50.000 - Rp 125.000',
              price: '50000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD300000ORG40000',
              userId: 'USR40000',
              name: 'Trolley Missing / Broken',
              description: 'Estimate Price : Rp 150.000 - Rp 300.000.',
              price: '150000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD400000ORG40000',
              userId: 'USR40000',
              name: 'Zipper',
              description:
                'Estimate Price : Rp 200.000 - Rp 500.000 FREE antar jemput barang untuk daerah Jabodetabek.',
              price: '200000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD500000ORG40000',
              userId: 'USR40000',
              name: 'Handle Missing / Broken',
              description: 'Estimate Price : Rp 125.000 - Rp 250.000.',
              price: '125000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD600000ORG40000',
              userId: 'USR40000',
              name: 'Combination Lock',
              description: 'Estimate Price : Rp 100.000 - Rp 150.000.',
              price: '100000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
          ],
        },
        {
          _id: 'ORG50000',
          name: 'Les Elite',
          description:
            'Perawatan mobil bagi Anda yang tidak mempunyai banyak waktu. Mobil bersih mengkilap dalam 30 Menit.',
          files: [
            {
              _id: 'OF50000',
              refId: 'ORG50000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI50000',
                  fileId: 'OF50000',
                  imgUrl: '/assets/les_elite/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL50000',
              orgId: 'ORG50000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG50000',
              userId: 'USR50000',
              name: 'Regular',
              description:
                'Perawatan mobil dalam 30 menit termasuk - Carnouba Wax - Semir Ban - Exterior Cleaning - Interior Cleaning - Vacuum.',
              price: '100000',
              viewCount: '12',
              orderCount: '33',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD200000ORG50000',
              userId: 'USR50000',
              name: 'Promo #Berimlek Ultra Nano',
              description:
                'Harga normal Rp 150.000, disc. 50% --> Rp 75.000. Perawatan Mobil 60-90 menit Termasuk -Semir Ban-Exterior Cleaning-Interior Cleaning-Vacuum-Nano Wax-Trim Dressing-Engine Dressing. BERLAKU UNTUK PEMBAYARAN NON-CASH',
              price: '75000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD300000ORG50000',
              userId: 'USR50000',
              name: 'PRO Service',
              description:
                'Perawatan Mobil dalam 2-3 jam termasuk : - Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Trim Dressing -Engine Dressing.',
              price: '250000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD400000ORG50000',
              userId: 'USR50000',
              name: 'Premium',
              description:
                'Perawatan Mobil dalam 2-3 jam termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
              price: '350000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD500000ORG50000',
              userId: 'USR50000',
              name: 'Glass Water Sport',
              description: 'Perawatan Mobil penanganan Glass Water Spot.',
              price: '150000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD600000ORG50000',
              userId: 'USR50000',
              name: 'Body Water Spot',
              description: 'Perawatan mobil untuk Body Water Spot.',
              price: '250000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
            {
              _id: 'PRD700000ORG50000',
              userId: 'USR50000',
              name: 'Poles / Salon',
              description:
                'Perawatan Mobil dalam 4 jam Termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
              price: '1250000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT10000',
                  name: 'Repair',
                },
              ],
            },
          ],
        },
        {
          _id: 'ORG60000',
          name: 'Lestari Tattoo',
          description:
            'Highly experienced in tattoo art from and strictly adheres to International Safety and Hygiene Standards and ensure hospital-grad sterilization throuhout, as well as sterille single use equipment and needles and high quality inks. We providing the best services for our clients and make them can really enjoy the experience of getting tattooed.',
          files: [
            {
              _id: 'OF60000',
              refId: 'ORG60000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI60000',
                  fileId: 'OF60000',
                  imgUrl: '/assets/lestari_tattoo/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL60000',
              orgId: 'ORG60000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG60000',
              userId: 'USR60000',
              name: 'Permanent Tattoo',
              description:
                'Jasa tattoo permanen min. price Rp 500.000 (uk 5x5cm) Harga persenti meter persegi Rp 15.000.',
              price: '500000',
              viewCount: '12',
              orderCount: '33',
              categories: [
                {
                  _id: 'CAT60000',
                  name: 'Art',
                },
              ],
            },
            {
              _id: 'PRD200000ORG60000',
              userId: 'USR60000',
              name: 'Permanent Tattoo 10x10',
              description: 'Jasa tattoo permanent standar untuk ukuran 10x10 CM',
              price: '1500000',
              viewCount: '22',
              orderCount: '13',
              categories: [
                {
                  _id: 'CAT60000',
                  name: 'Art',
                },
              ],
            },
          ],
        },
        {
          _id: 'ORG70000',
          name: 'Mau Kemana Si',
          description:
            'Mau Kemana Si adalah Tour Organizer yang sudah berpengalaman semenjak tahun 2015 dan sangat mengutamakan kenyamanan, keamanan dan kepuasaan customers. Tour Organizer kami sudah dipercaya untuk event Family Gathering dan Private Trip oleh banyak Perusahaan Besar seperti Astra Honda Motor, Ace Hardware, Honda Mobil, Gikoko, RPT dan lainnya. Serta kami sudah dipercaya untuk Study tour beberapa kampus dan sekolah yaitu Universitas Uhamka, GS Fame Bussiness School, SMP 269 Jakarta, SMP 78 Jakarta dan lainnya We Provide : 🏖 Open trip 🕴 Private trip 👩‍🎓 Study tour 👔 Family gathering 🚎 Rent Bus.',
          files: [
            {
              _id: 'OF70000',
              refId: 'ORG70000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI70000',
                  fileId: 'OF70000',
                  imgUrl: '/assets/mau_kemana_si/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL70000',
              orgId: 'ORG70000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG70000',
              userId: 'USR70000',
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
              userId: 'USR70000',
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
              userId: 'USR70000',
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
              userId: 'USR70000',
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
              userId: 'USR70000',
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
        {
          _id: 'ORG80000',
          name: 'Shoes And Care',
          description:
            'Mau Kemana Si adalah Tour Organizer yang sudah berpengalaman semenjak tahun 2015 dan sangat mengutamakan kenyamanan, keamanan dan kepuasaan customers. Tour Organizer kami sudah dipercaya untuk event Family Gathering dan Private Trip oleh banyak Perusahaan Besar seperti Astra Honda Motor, Ace Hardware, Honda Mobil, Gikoko, RPT dan lainnya. Serta kami sudah dipercaya untuk Study tour beberapa kampus dan sekolah yaitu Universitas Uhamka, GS Fame Bussiness School, SMP 269 Jakarta, SMP 78 Jakarta dan lainnya We Provide : 🏖 Open trip 🕴 Private trip 👩‍🎓 Study tour 👔 Family gathering 🚎 Rent Bus.',
          files: [
            {
              _id: 'OF80000',
              refId: 'ORG80000',
              refType: 'PictureProfile',
              images: [
                {
                  _id: 'OI80000',
                  fileId: 'OF80000',
                  imgUrl: '/assets/shoes_and_care/logo_vendor.jpg',
                },
              ],
            },
          ],
          locations: [
            {
              _id: 'OL80000',
              orgId: 'ORG80000',
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG80000',
              userId: 'USR80000',
              name: 'Deep Cleaning Shoes',
              description:
                'Deep cleaning, ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA. Pembayaran Non Cash.',
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
              _id: 'PRD200000ORG80000',
              userId: 'USR80000',
              name: 'Bag Care Medium',
              description:
                'Untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
              price: '125000',
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
              _id: 'PRD300000ORG80000',
              userId: 'USR80000',
              name: 'Snapback Cleaning Hard',
              description:
                'Hanya untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
              price: '130000',
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
      ],
    },
  });
};