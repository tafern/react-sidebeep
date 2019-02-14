import seeder from '@cleverbeagle/seeder';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/Documents/Documents';
import Comments from '../../api/Comments/Comments';
import Products from '../../api/Products/Products';
import Files from '../../api/Files/Files';
import Reviews from '../../api/Reviews/Reviews';
import Orgs from '../../api/Orgs/Orgs';
import Images from '../../api/Images/Images';
import Headlines from '../../api/Headlines/Headlines';
import Categories from '../../api/Categories/Categories';
import Locations from '../../api/Locations/Locations';
import Posts from '../../api/Posts/Posts';

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

const reviewsSeed = (userId, date, productId) => {
  seeder(Reviews, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(reviewIteration, faker) {
          return {
            userId,
            productId,
            review: faker.hacker.phrase(),
            createdAt: date,
          };
        },
      },
    },
  });
};

const productPortfolioImageSeed = (userId, date, idOfFile) => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 5,
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

const productPortfolioFileSeed = (userId, date, productId) => {
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
            type: 'ProductPortfolio',
            dependentData(fileId) {
              productPortfolioImageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const imageSeed = (userId, date, idOfFile) => {
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

const productCoverFileSeed = (userId, date, productId) => {
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
            type: 'ProductCover',
            dependentData(fileId) {
              imageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const productsSeed = (userId, date, orgId) => {
  const categoryList = [
    'Hobby and Lifestyle',
    'Dance',
    'Knowledge and Education',
    'Reparation',
    'All About Music',
    'Animal and Pets Lover',
    'Event and Entertainment',
    'Home and Utilities',
    'Art and Craft',
    'Beauty and Health',
    'Business Professional',
    'Martial Arts and Self Defense',
    'Sports',
  ];
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(iteration) {
          const arrayCategory = categoryList[Math.floor(Math.random() * categoryList.length)];
          let ctgryId = arrayCategory.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            orgId,
            name: `Product #${iteration + 1}`,
            description: `This is the body of product #${iteration + 1}`,
            price: Math.floor(Math.random() * (50000 - 50 + 1)) + 500000,
            viewCount: Math.floor(Math.random() * (514 - 50 + 1)) + 200,
            orderCount: Math.floor(Math.random() * (914 - 63 + 1)) + 248,
            categories: [
              {
                _id: ctgryId,
                name: arrayCategory,
              },
            ],
            dependentData(productId) {
              reviewsSeed(userId, date, productId);
              productCoverFileSeed(userId, date, productId);
              productPortfolioFileSeed(userId, date, productId);
            },
          };
        },
      },
    },
  });
};

const postCoverFileSeed = (userId, date, postId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refferenceId: postId,
            fileUrl: '',
            createdAt: date,
            type: 'PostCover',
            dependentData(fileId) {
              imageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const postsSeed = (userId, date) => {
  const categoryList = [
    'Hobby and Lifestyle',
    'Dance',
    'Knowledge and Education',
    'Reparation',
    'All About Music',
    'Animal and Pets Lover',
    'Event and Entertainment',
    'Home and Utilities',
    'Art and Craft',
    'Beauty and Health',
    'Business Professional',
    'Martial Arts and Self Defense',
    'Sports',
  ];
  seeder(Posts, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(iteration) {
          const arrayCategory = categoryList[Math.floor(Math.random() * categoryList.length)];
          let ctgryId = arrayCategory.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            userId,
            title: `Post #${iteration + 1}`,
            synopsis: `Post Synopsis #${iteration + 1}`,
            description: `This is the body of Post #${iteration + 1}`,
            viewCount: Math.floor(Math.random() * (514 - 50 + 1)) + 200,
            categories: [
              {
                _id: ctgryId,
                name: arrayCategory,
              },
            ],
            dependentData(postId) {
              postCoverFileSeed(userId, date, postId);
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

const locationsSeed = (userId, date, organizationId) => {
  const locationList = [
    'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
    'Jl HR Rasuna Said Kav 2-3 Bl X-5 Menara Kadin Indonesia Lt 16',
    'Jl Raya Pasar Minggu Kav 34 Graha Sucofindo Bl B,Pancoran',
    'Ruko Daan Mogot Baru Bl 3-A/3,Kalideres',
    'Erector House, (2nd Floor), South Wing',
    'Jl Jend Gatot Subroto Kav 54 Wisma Baja Lt 3,Kuningan Timur',
    'Jl Bendungan Hilir IV 15,Bendungan Hilir',
  ];
  seeder(Locations, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          const arrayLocation = locationList[Math.floor(Math.random() * locationList.length)];
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            orgId: organizationId,
            address: arrayLocation,
            city: 'Jakarta Pusat',
            province: 'DKI Jakarta',
            latitude: '-6.135558',
            longitude: '106.8044564',
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
        count: 5,
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
              locationsSeed(userId, date, orgId);
            },
          };
        },
      },
    },
  });
};

const headlineImageSeed = (userId, date, idOfFile) => {
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

const headlineFileSeed = (userId, date, headlineId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refferenceId: headlineId,
            fileUrl: '',
            createdAt: date,
            type: 'Headline',
            dependentData(fileId) {
              headlineImageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const headlinesSeed = (userId) => {
  seeder(Headlines, {
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
            name: `Headline #${iteration + 1}`,
            description: `This is the body of headline #${iteration + 1}`,
            dependentData(headlineId) {
              headlineFileSeed(userId, date, headlineId);
            },
          };
        },
      },
    },
  });
};

const categoryImageSeed = (userId, date, idOfFile) => {
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

const categoryFileSeed = (userId, date, categoryId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refferenceId: categoryId,
            fileUrl: '',
            createdAt: date,
            type: 'Category',
            dependentData(fileId) {
              categoryImageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};

const categoriesSeed = (userId) => {
  const categoryList = [
    'Hobby and Lifestyle',
    'Dance',
    'Knowledge and Education',
    'Reparation',
    'All About Music',
    'Animal and Pets Lover',
    'Event and Entertainment',
    'Home and Utilities',
    'Art and Craft',
    'Beauty and Health',
    'Business Professional',
    'Martial Arts and Self Defense',
    'Sports',
  ];
  let count = 0;
  seeder(Categories, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 13,
        seed() {
          const date = new Date().toISOString();
          const arrayCategory = categoryList[count];
          let ctgryId = arrayCategory.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          ctgryId = ctgryId.replace(' ', '_').toLowerCase();
          count += 1;
          return {
            isPublic: false,
            createdAt: date,
            updatedAt: date,
            _id: ctgryId,
            name: arrayCategory,
            description: `This is the body of category #${arrayCategory}`,
            type: 'Product',
            dependentData(categoryId) {
              categoryFileSeed(userId, date, categoryId);
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
          headlinesSeed(userId);
          categoriesSeed(userId);
          postsSeed(userId);
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
            headlinesSeed(userId);
            categoriesSeed(userId);
            postsSeed(userId);
          },
        };
      },
    },
  },
});
