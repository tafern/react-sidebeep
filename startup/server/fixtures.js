import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import { documentsSeed } from './seeders/document';

import {
  cayCayProductsSeed,
  cayCayProductPortfolioFileSeed,
  cayCayProductPortfolioImageSeed,
  cayCayProductCoverFileSeed,
  cayCayProductCoverImageSeed,
  cayCayDisplayPictureFileSeed,
} from './seeders/product/cay_cay/cay_cay_seed';
import {
  kaizenProductsSeed,
  kaizenProductPortfolioFileSeed,
  kaizenProductPortfolioImageSeed,
  kaizenProductCoverFileSeed,
  kaizenProductCoverImageSeed,
  kaizenDisplayPictureFileSeed,
} from './seeders/product/kaizen/kaizen_seed';
import {
  katrosGarageProductsSeed,
  katrosGarageProductPortfolioFileSeed,
  katrosGarageProductPortfolioImageSeed,
  katrosGarageProductCoverFileSeed,
  katrosGarageProductCoverImageSeed,
  katrosGarageDisplayPictureFileSeed,
} from './seeders/product/katros_garage/katros_garage_seed';
import {
  labaLabaProductsSeed,
  labaLabaProductPortfolioFileSeed,
  labaLabaProductPortfolioImageSeed,
  labaLabaProductCoverFileSeed,
  labaLabaProductCoverImageSeed,
  labaLabaDisplayPictureFileSeed,
} from './seeders/product/laba_laba/laba_laba_seed';
import {
  lesEliteProductsSeed,
  lesEliteProductPortfolioFileSeed,
  lesEliteProductPortfolioImageSeed,
  lesEliteProductCoverFileSeed,
  lesEliteProductCoverImageSeed,
  lesEliteDisplayPictureFileSeed,
} from './seeders/product/les_elite/les_elite_seed';
import {
  lestariTattooProductsSeed,
  lestariTattooProductPortfolioFileSeed,
  lestariTattooProductPortfolioImageSeed,
  lestariTattooProductCoverFileSeed,
  lestariTattooProductCoverImageSeed,
  lestariTattooDisplayPictureFileSeed,
} from './seeders/product/lestari_tattoo/lestari_tattoo_seed';
import {
  mauKemanaSiProductsSeed,
  mauKemanaSiProductPortfolioFileSeed,
  mauKemanaSiProductPortfolioImageSeed,
  mauKemanaSiProductCoverFileSeed,
  mauKemanaSiProductCoverImageSeed,
  mauKemanaSiDisplayPictureFileSeed,
} from './seeders/product/mau_kemana_si/mau_kemana_si_seed';
import {
  shoesAndCareProductsSeed,
  shoesAndCareProductPortfolioFileSeed,
  shoesAndCareProductPortfolioImageSeed,
  shoesAndCareProductCoverFileSeed,
  shoesAndCareProductCoverImageSeed,
  shoesAndCareDisplayPictureFileSeed,
} from './seeders/product/shoes_and_care/shoes_and_care_seed';
import Files from '../../api/Files/Files';
import Images from '../../api/Images/Images';
import Headlines from '../../api/Headlines/Headlines';
import Orgs from '../../api/Orgs/Orgs';
import Locations from '../../api/Locations/Locations';
import Categories from '../../api/Categories/Categories';

const userImageSeed = (userId, imgUrl, idOfFile) => {
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
const userDisplayPictureFileSeed = (userId) => {
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
              userImageSeed(userId, '/default_user_image.png', fileId);
            },
          };
        },
      },
    },
  });
};

seeder(Orgs, {
  seedIfExistingData: false,
  environments: ['development', 'staging'],
  data: {
    static: [
      {
        _id: 'ORG10000',
        name: 'Cay Cay',
        description: 'This Is About Cay Cay',
      },
      {
        _id: 'ORG20000',
        name: 'Kaizen',
        description:
          'PROMO MENARIK UNTUK PARA CUSTOMER!! GUNAKAN KODE VOCHER 50K UNTUK MENDAPATKAN JASA INI DARI 130K MENJADI 80K!! Tidak berlaku untuk weekend.',
      },
      {
        _id: 'ORG30000',
        name: 'Katros Garage',
        description:
          'The Katros Motorcycles merupakan bengkel modifikasi motor yang siap membantu keinginan Anda memiliki motor custom melalui improvisasi ide-ide kreatif dalam setiap proses pembuatannya. Lebih dari itu, The Katros Garage merupakan layanan jasa yang menyatukan gaya hidup dengan motor custom. Lewat aplikasi Sidebeep Anda bisa mendapatkan jasa konsultasi seputar custom motor dan memiliki hasil karya The Katros Garage khusus custom motor Kawasaki W 175.',
      },
      {
        _id: 'ORG40000',
        name: 'Laba Laba',
        description:
          'We reparasi segala. We will try our best to cater to your needs. Please do not hesitate to ask us should you need to enquire about other service.',
      },
      {
        _id: 'ORG50000',
        name: 'Les Elite',
        description:
          'Perawatan mobil bagi Anda yang tidak mempunyai banyak waktu. Mobil bersih mengkilap dalam 30 Menit.',
      },
      {
        _id: 'ORG60000',
        name: 'Lestari Tattoo',
        description:
          'Highly experienced in tattoo art from and strictly adheres to International Safety and Hygiene Standards and ensure hospital-grad sterilization throuhout, as well as sterille single use equipment and needles and high quality inks. We providing the best services for our clients and make them can really enjoy the experience of getting tattooed.',
      },
      {
        _id: 'ORG70000',
        name: 'Mau Kemana Si',
        description:
          'Mau Kemana Si adalah Tour Organizer yang sudah berpengalaman semenjak tahun 2015 dan sangat mengutamakan kenyamanan, keamanan dan kepuasaan customers. Tour Organizer kami sudah dipercaya untuk event Family Gathering dan Private Trip oleh banyak Perusahaan Besar seperti Astra Honda Motor, Ace Hardware, Honda Mobil, Gikoko, RPT dan lainnya. Serta kami sudah dipercaya untuk Study tour beberapa kampus dan sekolah yaitu Universitas Uhamka, GS Fame Bussiness School, SMP 269 Jakarta, SMP 78 Jakarta dan lainnya We Provide : 🏖 Open trip 🕴 Private trip 👩‍🎓 Study tour 👔 Family gathering 🚎 Rent Bus.',
      },
      {
        _id: 'ORG80000',
        name: 'Shoes And Care',
        description:
          'Mau Kemana Si adalah Tour Organizer yang sudah berpengalaman semenjak tahun 2015 dan sangat mengutamakan kenyamanan, keamanan dan kepuasaan customers. Tour Organizer kami sudah dipercaya untuk event Family Gathering dan Private Trip oleh banyak Perusahaan Besar seperti Astra Honda Motor, Ace Hardware, Honda Mobil, Gikoko, RPT dan lainnya. Serta kami sudah dipercaya untuk Study tour beberapa kampus dan sekolah yaitu Universitas Uhamka, GS Fame Bussiness School, SMP 269 Jakarta, SMP 78 Jakarta dan lainnya We Provide : 🏖 Open trip 🕴 Private trip 👩‍🎓 Study tour 👔 Family gathering 🚎 Rent Bus.',
      },
    ],
  },
});
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
seeder(Headlines, {
  seedIfExistingData: false,
  environments: ['development', 'staging'],
  data: {
    static: [
      {
        _id: 'H10000',
        name: 'Main Headline',
        description: 'This Is About Main Headline',
      },
      {
        _id: 'H20000',
        name: 'News Headline',
        description: 'This Is About Main News',
      },
      {
        _id: 'H30000',
        name: 'Promo Headline',
        description: 'This Is About Promo Headline',
      },
    ],
  },
});
seeder(Categories, {
  seedIfExistingData: false,
  environments: ['development', 'staging'],
  data: {
    static: [
      {
        _id: 'CAT10000',
        name: 'Repair',
        description: 'This Is About Category Repair',
      },
      {
        _id: 'CAT20000',
        name: 'Home',
        description: 'This Is About Category Home',
      },
      {
        _id: 'CAT30000',
        name: 'Beauty',
        description: 'This Is About Category Beauty',
      },
      {
        _id: 'CAT40000',
        name: 'Health',
        description: 'This Is About Category Health',
      },
      {
        _id: 'CAT50000',
        name: 'Fashion',
        description: 'This Is About Category Fashion',
      },
      {
        _id: 'CAT60000',
        name: 'Art',
        description: 'This Is About Category Art',
      },
      {
        _id: 'CAT70000',
        name: 'Hobbies',
        description: 'This Is About Category Hobbies',
      },
      {
        _id: 'CAT80000',
        name: 'Others',
        description: 'This Is About Category Others',
      },
    ],
  },
});

seeder(Images, {
  seedIfExistingData: false,
  environments: ['development', 'staging'],
  data: {
    static: [
      {
        _id: 'ORGI10000',
        fileId: 'ORGF10000',
        imgUrl: '/assets/cay_cay/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI20000',
        fileId: 'ORGF20000',
        imgUrl: '/assets/kaizen/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI30000',
        fileId: 'ORGF30000',
        imgUrl: '/assets/katros_garage/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI40000',
        fileId: 'ORGF40000',
        imgUrl: '/assets/laba_laba/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI50000',
        fileId: 'ORGF50000',
        imgUrl: '/assets/les_elite/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI60000',
        fileId: 'ORGF60000',
        imgUrl: '/assets/lestari_tattoo/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI70000',
        fileId: 'ORGF70000',
        imgUrl: '/assets/mau_kemana_si/logo_vendor.jpeg',
      },
      {
        _id: 'ORGI80000',
        fileId: 'ORGF80000',
        imgUrl: '/assets/shoes_and_care/logo_vendor.jpeg',
      },
      {
        _id: 'HIM10000',
        fileId: 'MAINF10000',
        imgUrl: '/assets/headline/main/main_1.jpg',
      },
      {
        _id: 'HIM20000',
        fileId: 'MAINF10000',
        imgUrl: '/assets/headline/main/main_2.jpg',
      },
      {
        _id: 'HIM30000',
        fileId: 'MAINF10000',
        imgUrl: '/assets/headline/main/main_3.jpg',
      },
      {
        _id: 'HIM40000',
        fileId: 'MAINF10000',
        imgUrl: '/assets/headline/main/main_4.jpg',
      },
      {
        _id: 'HIM50000',
        fileId: 'MAINF10000',
        imgUrl: '/assets/headline/main/main_5.jpg',
      },
      {
        _id: 'HIN10000',
        fileId: 'NEWSF10000',
        imgUrl: '/assets/headline/news/news_1.jpg',
      },
      {
        _id: 'HIN20000',
        fileId: 'NEWSF10000',
        imgUrl: '/assets/headline/news/news_2.jpg',
      },
      {
        _id: 'HIP10000',
        fileId: 'PROMOF10000',
        imgUrl: '/assets/headline/promo/promo_1.jpg',
      },
      {
        _id: 'HIP20000',
        fileId: 'PROMOF10000',
        imgUrl: '/assets/headline/promo/promo_2.jpg',
      },
      {
        _id: 'CI10000',
        fileId: 'CF10000',
        imgUrl: '/assets/category/repair.jpg',
      },
      {
        _id: 'CI20000',
        fileId: 'CF20000',
        imgUrl: '/assets/category/home.jpg',
      },
      {
        _id: 'CI30000',
        fileId: 'CF30000',
        imgUrl: '/assets/category/beauty.jpg',
      },
      {
        _id: 'CI40000',
        fileId: 'CF40000',
        imgUrl: '/assets/category/health.jpg',
      },
      {
        _id: 'CI50000',
        fileId: 'CF50000',
        imgUrl: '/assets/category/fashion.jpg',
      },
      {
        _id: 'CI60000',
        fileId: 'CF60000',
        imgUrl: '/assets/category/art.jpg',
      },
      {
        _id: 'CI70000',
        fileId: 'CF70000',
        imgUrl: '/assets/category/bobbies.jpg',
      },
      {
        _id: 'CI80000',
        fileId: 'CF80000',
        imgUrl: '/assets/category/others.jpg',
      },
    ],
  },
});
seeder(Files, {
  seedIfExistingData: false,
  environments: ['development', 'staging'],
  data: {
    static: [
      {
        _id: 'ORGF10000',
        refId: 'ORG10000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF20000',
        refId: 'ORG20000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF30000',
        refId: 'ORG30000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF40000',
        refId: 'ORG40000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF50000',
        refId: 'ORG50000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF60000',
        refId: 'ORG60000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF70000',
        refId: 'ORG70000',
        refType: 'PictureProfile',
      },
      {
        _id: 'ORGF80000',
        refId: 'ORG80000',
        refType: 'PictureProfile',
      },
      {
        _id: 'MAINF10000',
        refId: 'H10000',
        refType: 'Main',
      },
      {
        _id: 'NEWSF10000',
        refId: 'H20000',
        refType: 'News',
      },
      {
        _id: 'PROMOF10000',
        refId: 'H30000',
        refType: 'Promo',
      },
      {
        _id: 'CF10000',
        refId: 'CAT10000',
        refType: 'Icon',
      },
      {
        _id: 'CF20000',
        refId: 'CAT20000',
        refType: 'Icon',
      },
      {
        _id: 'CF30000',
        refId: 'CAT30000',
        refType: 'Icon',
      },
      {
        _id: 'CF40000',
        refId: 'CAT40000',
        refType: 'Icon',
      },
      {
        _id: 'CF50000',
        refId: 'CAT50000',
        refType: 'Icon',
      },
      {
        _id: 'CF60000',
        refId: 'CAT60000',
        refType: 'Icon',
      },
      {
        _id: 'CF70000',
        refId: 'CAT70000',
        refType: 'Icon',
      },
      {
        _id: 'CF80000',
        refId: 'CAT80000',
        refType: 'Icon',
      },
    ],
  },
});

seeder(Meteor.users, {
  seedIfExistingData: true,
  environments: ['development', 'staging'],
  data: {
    static: [
      {
        email: 'admin@admin.com',
        password: 'password',
        profile: {
          name: {
            first: 'Andy',
            last: 'Warhol',
          },
        },
        roles: ['admin'],
        dependentData(userId) {
          documentsSeed(userId);
          userDisplayPictureFileSeed(userId);
        },
      },
      {
        orgId: 'ORG10000',
        email: 'cay_cay@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Cay',
            last: 'Cay',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          cayCayDisplayPictureFileSeed(userId);
          cayCayProductsSeed(userId);
          cayCayProductPortfolioFileSeed();
          cayCayProductPortfolioImageSeed();
          cayCayProductCoverFileSeed();
          cayCayProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG20000',
        email: 'kaizen@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Kaizen',
            last: 'Spa',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          kaizenDisplayPictureFileSeed(userId);
          kaizenProductsSeed(userId);
          kaizenProductPortfolioFileSeed();
          kaizenProductPortfolioImageSeed();
          kaizenProductCoverFileSeed();
          kaizenProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG30000',
        email: 'katros_garage@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Katros',
            last: 'Garage',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          katrosGarageDisplayPictureFileSeed(userId);
          katrosGarageProductsSeed(userId);
          katrosGarageProductPortfolioFileSeed();
          katrosGarageProductPortfolioImageSeed();
          katrosGarageProductCoverFileSeed();
          katrosGarageProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG40000',
        email: 'laba_laba@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Laba',
            last: 'Laba',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          labaLabaDisplayPictureFileSeed(userId);
          labaLabaProductsSeed(userId);
          labaLabaProductPortfolioFileSeed();
          labaLabaProductPortfolioImageSeed();
          labaLabaProductCoverFileSeed();
          labaLabaProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG50000',
        email: 'les_elite@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Les',
            last: 'Elite',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          lesEliteDisplayPictureFileSeed(userId);
          lesEliteProductsSeed(userId);
          lesEliteProductPortfolioFileSeed();
          lesEliteProductPortfolioImageSeed();
          lesEliteProductCoverFileSeed();
          lesEliteProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG60000',
        email: 'lestari_tattoo@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Lestari',
            last: 'Tattoo',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          lestariTattooDisplayPictureFileSeed(userId);
          lestariTattooProductsSeed(userId);
          lestariTattooProductPortfolioFileSeed();
          lestariTattooProductPortfolioImageSeed();
          lestariTattooProductCoverFileSeed();
          lestariTattooProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG70000',
        email: 'mau_kemana_si@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Mau Kemana',
            last: 'Si',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          mauKemanaSiDisplayPictureFileSeed(userId);
          mauKemanaSiProductsSeed(userId);
          mauKemanaSiProductPortfolioFileSeed();
          mauKemanaSiProductPortfolioImageSeed();
          mauKemanaSiProductCoverFileSeed();
          mauKemanaSiProductCoverImageSeed();
        },
      },
      {
        orgId: 'ORG80000',
        email: 'shoes_and_care@sidebeep.com',
        password: 'password',
        profile: {
          name: {
            first: 'Shoes And',
            last: 'Care',
          },
        },
        roles: ['sider'],
        dependentData(userId) {
          shoesAndCareDisplayPictureFileSeed(userId);
          shoesAndCareProductsSeed(userId);
          shoesAndCareProductPortfolioFileSeed();
          shoesAndCareProductPortfolioImageSeed();
          shoesAndCareProductCoverFileSeed();
          shoesAndCareProductCoverImageSeed();
        },
      },
    ],
    dynamic: {
      count: 10,
      seed(iteration, faker) {
        const userCount = iteration + 1;
        const roles = ['sider', 'beeper', 'user'];
        const role = roles[Math.floor(Math.random() * roles.length)];
        return {
          email: `user+${userCount}@test.com`,
          password: 'password',
          profile: {
            name: {
              first: faker.name.firstName(),
              last: faker.name.lastName(),
            },
          },
          roles: [role],
          dependentData(userId) {
            userDisplayPictureFileSeed(userId);
            documentsSeed(userId);
          },
        };
      },
    },
  },
});
