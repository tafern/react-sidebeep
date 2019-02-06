import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/Documents/Documents';
import Comments from '../../api/Comments/Comments';
import Products from '../../api/Products/Products';
import ProductComments from '../../api/ProductComments/ProductComments';

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

const productCommentsSeed = (userId, date, productId) => {
  seeder(ProductComments, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(productCommentIteration, faker) {
          return {
            userId,
            productId,
            productComment: faker.hacker.phrase(),
            createdAt: date,
          };
        },
      },
    },
  });
};

const productsSeed = (userId) => {
  seeder(Products, {
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
            productName: `Product #${iteration + 1}`,
            productDescription: `This is the body of product #${iteration + 1}`,
            dependentData(productId) {
              productCommentsSeed(userId, date, productId);
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
          productsSeed(userId);
        },
      },
    ],
    dynamic: {
      count: 5,
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
            productsSeed(userId);
          },
        };
      },
    },
  },
});
