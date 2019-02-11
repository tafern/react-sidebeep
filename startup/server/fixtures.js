import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/Documents/Documents';
import Comments from '../../api/Comments/Comments';
import Products from '../../api/Products/Products';
import Files from '../../api/Files/Files';
import ProductReviews from '../../api/ProductReviews/ProductReviews';
import Orgs from '../../api/Orgs/Orgs';
import Images from '../../api/Images/Images';

const commentsSeed = (userId, date, documentId) => {
  seeder(Comments, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(commentIteration, faker) {
          return {
            userId,
            documentId,
            comment: faker.hacker.phrase(),
            createdAt: date,
          };
        },
      },
    },
  });
};

const documentsSeed = (userId) => {
  seeder(Documents, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 5,
        seed(iteration) {
          const date = new Date().toISOString();
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            owner: userId,
            title: `Document #${iteration + 1}`,
            body: `This is the body of document #${iteration + 1}`,
            dependentData(documentId) {
              commentsSeed(userId, date, documentId);
            },
          };
        },
      },
    },
  });
};

const productReviewsSeed = (userId, date, productId) => {
  seeder(ProductReviews, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(productReviewIteration, faker) {
          return {
            userId,
            productId,
            productReview: faker.hacker.phrase(),
            createdAt: date,
          };
        },
      },
    },
  });
};

const productImageSeed = (userId, date, idOfFile) => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed() {
          return {
            fileId: idOfFile,
            imgUrl:
              'https://api.sidebeep.com/files/images/20296705-d354-424a-99d3-b259da56e833/c_fit,',
            createdAt: date,
          };
        },
      },
    },
  });
};

const productFileSeed = (userId, date, productId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refferenceId: productId,
            fileUrl: '',
            createdAt: date,
            type: 'Product',
            dependentData(fileId) {
              productImageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const productsSeed = (userId, date, organizationId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(iteration) {
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            orgId: organizationId,
            name: `Product #${iteration + 1}`,
            description: `This is the body of product #${iteration + 1}`,
            dependentData(productId) {
              productReviewsSeed(userId, date, productId);
              productFileSeed(userId, date, productId);
            },
          };
        },
      },
    },
  });
};

const orgImageSeed = (userId, date, idOfFile) => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            fileId: idOfFile,
            imgUrl:
              'https://api.sidebeep.com/files/images/20296705-d354-424a-99d3-b259da56e833/c_fit,',
            createdAt: date,
          };
        },
      },
    },
  });
};

const orgFileSeed = (userId, date, orgId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refferenceId: orgId,
            fileUrl: '',
            createdAt: date,
            type: 'Org',
            dependentData(fileId) {
              orgImageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const orgsSeed = (userId) => {
  seeder(Orgs, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 2,
        seed(iteration) {
          const date = new Date().toISOString();
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            owner: userId,
            name: `Store #${iteration + 1}`,
            description: `This is the body of store #${iteration + 1}`,
            dependentData(orgId) {
              productsSeed(userId, date, orgId);
              orgFileSeed(userId, date, orgId);
            },
          };
        },
      },
    },
  });
};

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
          orgsSeed(userId);
        },
      },
    ],
    dynamic: {
      count: 2,
      seed(iteration, faker) {
        const userCount = iteration + 1;
        return {
          email: `user+${userCount}@test.com`,
          password: 'password',
          profile: {
            name: {
              first: faker.name.firstName(),
              last: faker.name.lastName(),
            },
          },
          roles: ['user'],
          dependentData(userId) {
            documentsSeed(userId);
            orgsSeed(userId);
          },
        };
      },
    },
  },
});
