import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';

import Files from '../../api/Files/Files';
import { documentsSeed } from './seeders/document';
import imageSeed from './seeders/common';
import { orgsSeed, orgFileSeed, orgImageSeed, orgLocationsSeed } from './seeders/org/org';
import { headlinesSeed, headlineFileSeed, headlineImageSeed } from './seeders/headline/headline';
import { categoriesSeed, categoryImages, categoryFile } from './seeders/category/category';
import {
  cayCayProductsSeed,
  cayCayProductPortfolioFileSeed,
  cayCayProductPortfolioImageSeed,
  cayCayProductCoverFileSeed,
  cayCayProductCoverImageSeed,
} from './seeders/product/cay_cay/cay_cay_seed';
import {
  kaizenProductsSeed,
  kaizenProductPortfolioFileSeed,
  kaizenProductPortfolioImageSeed,
  kaizenProductCoverFileSeed,
  kaizenProductCoverImageSeed,
} from './seeders/product/kaizen/kaizen_seed';
import {
  katrosGarageProductsSeed,
  katrosGarageProductPortfolioFileSeed,
  katrosGarageProductPortfolioImageSeed,
  katrosGarageProductCoverFileSeed,
  katrosGarageProductCoverImageSeed,
} from './seeders/product/katros_garage/katros_garage_seed';
import {
  labaLabaProductsSeed,
  labaLabaProductPortfolioFileSeed,
  labaLabaProductPortfolioImageSeed,
  labaLabaProductCoverFileSeed,
  labaLabaProductCoverImageSeed,
} from './seeders/product/laba_laba/laba_laba_seed';
import {
  lesEliteProductsSeed,
  lesEliteProductPortfolioFileSeed,
  lesEliteProductPortfolioImageSeed,
  lesEliteProductCoverFileSeed,
  lesEliteProductCoverImageSeed,
} from './seeders/product/les_elite/les_elite_seed';
import {
  lestariTattooProductsSeed,
  lestariTattooProductPortfolioFileSeed,
  lestariTattooProductPortfolioImageSeed,
  lestariTattooProductCoverFileSeed,
  lestariTattooProductCoverImageSeed,
} from './seeders/product/lestari_tattoo/lestari_tattoo_seed';
import {
  mauKemanaSiProductsSeed,
  mauKemanaSiProductPortfolioFileSeed,
  mauKemanaSiProductPortfolioImageSeed,
  mauKemanaSiProductCoverFileSeed,
  mauKemanaSiProductCoverImageSeed,
} from './seeders/product/mau_kemana_si/mau_kemana_si_seed';
import {
  shoesAndCareProductsSeed,
  shoesAndCareProductPortfolioFileSeed,
  shoesAndCareProductPortfolioImageSeed,
  shoesAndCareProductCoverFileSeed,
  shoesAndCareProductCoverImageSeed,
} from './seeders/product/shoes_and_care/shoes_and_care_seed';

const userDisplayPictureFileSeed = (userId, date) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refId: userId,
            fileUrl: '',
            createdAt: date,
            refType: 'ProfilePicture',
            dependentData(fileId) {
              imageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

categoriesSeed();
categoryImages();
categoryFile();

orgsSeed();
orgImageSeed();
orgFileSeed();
orgLocationsSeed();

headlinesSeed();
headlineFileSeed();
headlineImageSeed();

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
          userDisplayPictureFileSeed(userId);
          cayCayProductsSeed(userId);
          cayCayProductPortfolioFileSeed();
          cayCayProductPortfolioImageSeed();
          cayCayProductCoverFileSeed();
          cayCayProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
          kaizenProductsSeed(userId);
          kaizenProductPortfolioFileSeed();
          kaizenProductPortfolioImageSeed();
          kaizenProductCoverFileSeed();
          kaizenProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
          katrosGarageProductsSeed(userId);
          katrosGarageProductPortfolioFileSeed();
          katrosGarageProductPortfolioImageSeed();
          katrosGarageProductCoverFileSeed();
          katrosGarageProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
          labaLabaProductsSeed(userId);
          labaLabaProductPortfolioFileSeed();
          labaLabaProductPortfolioImageSeed();
          labaLabaProductCoverFileSeed();
          labaLabaProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
          lesEliteProductsSeed(userId);
          lesEliteProductPortfolioFileSeed();
          lesEliteProductPortfolioImageSeed();
          lesEliteProductCoverFileSeed();
          lesEliteProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
          lestariTattooProductsSeed(userId);
          lestariTattooProductPortfolioFileSeed();
          lestariTattooProductPortfolioImageSeed();
          lestariTattooProductCoverFileSeed();
          lestariTattooProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
          mauKemanaSiProductsSeed(userId);
          mauKemanaSiProductPortfolioFileSeed();
          mauKemanaSiProductPortfolioImageSeed();
          mauKemanaSiProductCoverFileSeed();
          mauKemanaSiProductCoverImageSeed();
        },
      },
      {
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
          userDisplayPictureFileSeed(userId);
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
