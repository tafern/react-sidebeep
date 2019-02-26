import seeder from '@cleverbeagle/seeder/index.min';
import Tag from '../../../api/Tag/Tag';

export const tagSeed = () => {
  seeder(Tag, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'TAG10000',
          name: 'Repair',
          description: 'This Is About Category Repair',
        },
        {
          _id: 'TAG20000',
          name: 'Home',
          description: 'This Is About Category Home',
        },
        {
          _id: 'TAG30000',
          name: 'Beauty',
          description: 'This Is About Category Beauty',
        },
        {
          _id: 'TAG40000',
          name: 'Health',
          description: 'This Is About Category Health',
        },
        {
          _id: 'TAG50000',
          name: 'Fashion',
          description: 'This Is About Category Fashion',
        },
        {
          _id: 'TAG60000',
          name: 'Art',
          description: 'This Is About Category Art',
        },
        {
          _id: 'TAG70000',
          name: 'Hobbies',
          description: 'This Is About Category Hobbies',
        },
        {
          _id: 'TAG80000',
          name: 'Others',
          description: 'This Is About Category Others',
        },
      ],
    },
  });
};

export default tagSeed;
