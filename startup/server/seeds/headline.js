import seeder from '@cleverbeagle/seeder/index.min';
import Headline from '../../../api/Headline/Headline';

export const headlinesSeed = () => {
  seeder(Headline, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'H10000',
          name: 'Main Headline',
          type: 'Main',
          status: 'Active',
          description: 'This Is About Main Headline',
        },
        {
          _id: 'H20000',
          name: 'News Headline',
          type: 'News',
          status: 'Active',
          description: 'This Is About Main News',
        },
        {
          _id: 'H30000',
          name: 'Promo Headline',
          type: 'Promo',
          status: 'Active',
          description: 'This Is About Promo Headline',
        },
      ],
    },
  });
};

export default headlinesSeed;
