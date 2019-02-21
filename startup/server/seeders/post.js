import seeder from '@cleverbeagle/seeder/index.min';
import Files from '../../../api/Files/Files';
import Posts from '../../../api/Posts/Posts';
import imageSeed from './common';

export const postCoverFileSeed = (userId, date, postId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refId: postId,
            fileUrl: '',
            createdAt: date,
            refType: 'PostCover',
            dependentData(fileId) {
              imageSeed(userId, date, fileId);
            },
          };
        },
      },
    },
  });
};
export const postsSeed = (userId, date) => {
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
