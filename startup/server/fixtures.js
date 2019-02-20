import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import { documentsSeed } from './seeders/document';
import { orgsSeed, orgFileSeed, orgImageSeed, orgLocationsSeed } from './seeders/org/org';
import { headlinesSeed, headlineFileSeed, headlineImageSeed } from './seeders/headline/headline';
import { categoriesSeed, categoryImages, categoryFile } from './seeders/category/category';
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
