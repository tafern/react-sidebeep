import seeder from '@cleverbeagle/seeder/index.min';
import File from '../../../api/File/File';

export const globalFileSeed = () => {
  seeder(File, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: 'TAG10000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/repair.jpg',
        },
        {
          refs: {
            _id: 'TAG20000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/home.jpg',
        },
        {
          refs: {
            _id: 'TAG30000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/beauty.jpg',
        },
        {
          refs: {
            _id: 'TAG40000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/health.jpg',
        },
        {
          refs: {
            _id: 'TAG50000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/fashion.jpg',
        },
        {
          refs: {
            _id: 'TAG60000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/art.jpg',
        },
        {
          refs: {
            _id: 'TAG70000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/hobbies.jpg',
        },
        {
          refs: {
            _id: 'TAG80000',
            type: 'Tag',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/tag/others.jpg',
        },
        {
          refs: {
            _id: 'H10000',
            type: 'Headline',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/headline/main/main_1.jpg',
        },
        {
          refs: {
            _id: 'H20000',
            type: 'Headline',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/headline/news/news_1.jpg',
        },
        {
          refs: {
            _id: 'H30000',
            type: 'Headline',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/headline/promo/promo_1.jpg',
        },
      ],
    },
  });
};

export default globalFileSeed;
