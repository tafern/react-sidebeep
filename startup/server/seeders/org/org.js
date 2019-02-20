import seeder from '@cleverbeagle/seeder/index.min';
import Orgs from '../../../../api/Orgs/Orgs';
import Images from '../../../../api/Images/Images';
import Files from '../../../../api/Files/Files';
import Locations from '../../../../api/Locations/Locations';

export const orgImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: false,
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
    seedIfExistingData: false,
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
    seedIfExistingData: false,
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
        },
      ],
    },
  });
};
