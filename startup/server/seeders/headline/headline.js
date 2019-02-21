import seeder from '@cleverbeagle/seeder/index.min';
import Images from '../../../../api/Images/Images';
import Files from '../../../../api/Files/Files';
import Headlines from '../../../../api/Headlines/Headlines';

export const headlineImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
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
      ],
    },
  });
};

export const headlineFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
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
      ],
    },
  });
};

export const headlinesSeed = () => {
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
};
