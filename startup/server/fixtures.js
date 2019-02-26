import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import { documentsSeed } from './seeds/document';
import { cayCaySeed } from './seeds/org.cay_cay';
import { kaizenSeed } from './seeds/org.kaizen';
import { katrosGarageSeed } from './seeds/org.katros_garage';
import { lesEliteSeed } from './seeds/org.les_elite';
import { lestariTattooSeed } from './seeds/org.lestari_tattoo';
import { mauKemanaSiSeed } from './seeds/org.mau_kemana_si';
import { shoesAndCareSeed } from './seeds/org.shoes_and_care';
import { labaLabaSeed } from './seeds/org.laba_laba';
import { tagSeed } from './seeds/tag';
import { headlinesSeed } from './seeds/headline';
import { globalFileSeed } from './seeds/global.file';

tagSeed();
headlinesSeed();
globalFileSeed();

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
          cayCaySeed(userId);
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
          kaizenSeed(userId);
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
          katrosGarageSeed(userId);
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
          labaLabaSeed(userId);
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
          lesEliteSeed(userId);
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
          lestariTattooSeed(userId);
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
          mauKemanaSiSeed(userId);
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
          shoesAndCareSeed(userId);
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
            documentsSeed(userId);
          },
        };
      },
    },
  },
});
