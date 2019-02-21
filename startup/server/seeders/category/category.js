import seeder from '@cleverbeagle/seeder/index.min';
import Images from '../../../../api/Images/Images';
import Files from '../../../../api/Files/Files';
import Categories from '../../../../api/Categories/Categories';

export const categoryImages = () => {
  seeder(Images, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'CI10000',
          fileId: 'CF10000',
          imgUrl: '/assets/category/repair.jpg',
        },
        {
          _id: 'CI20000',
          fileId: 'CF20000',
          imgUrl: '/assets/category/home.jpg',
        },
        {
          _id: 'CI30000',
          fileId: 'CF30000',
          imgUrl: '/assets/category/beauty.jpg',
        },
        {
          _id: 'CI40000',
          fileId: 'CF40000',
          imgUrl: '/assets/category/health.jpg',
        },
        {
          _id: 'CI50000',
          fileId: 'CF50000',
          imgUrl: '/assets/category/fashion.jpg',
        },
        {
          _id: 'CI60000',
          fileId: 'CF60000',
          imgUrl: '/assets/category/art.jpg',
        },
        {
          _id: 'CI70000',
          fileId: 'CF70000',
          imgUrl: '/assets/category/bobbies.jpg',
        },
        {
          _id: 'CI80000',
          fileId: 'CF80000',
          imgUrl: '/assets/category/others.jpg',
        },
      ],
    },
  });
};

export const categoryFile = () => {
  seeder(Files, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'CF10000',
          refId: 'CAT10000',
          refType: 'Icon',
        },
        {
          _id: 'CF20000',
          refId: 'CAT20000',
          refType: 'Icon',
        },
        {
          _id: 'CF30000',
          refId: 'CAT30000',
          refType: 'Icon',
        },
        {
          _id: 'CF40000',
          refId: 'CAT40000',
          refType: 'Icon',
        },
        {
          _id: 'CF50000',
          refId: 'CAT50000',
          refType: 'Icon',
        },
        {
          _id: 'CF60000',
          refId: 'CAT60000',
          refType: 'Icon',
        },
        {
          _id: 'CF70000',
          refId: 'CAT70000',
          refType: 'Icon',
        },
        {
          _id: 'CF80000',
          refId: 'CAT80000',
          refType: 'Icon',
        },
      ],
    },
  });
};

export const categoriesSeed = () => {
  seeder(Categories, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'CAT10000',
          name: 'Repair',
          description: 'This Is About Category Repair',
        },
        {
          _id: 'CAT20000',
          name: 'Home',
          description: 'This Is About Category Home',
        },
        {
          _id: 'CAT30000',
          name: 'Beauty',
          description: 'This Is About Category Beauty',
        },
        {
          _id: 'CAT40000',
          name: 'Health',
          description: 'This Is About Category Health',
        },
        {
          _id: 'CAT50000',
          name: 'Fashion',
          description: 'This Is About Category Fashion',
        },
        {
          _id: 'CAT60000',
          name: 'Art',
          description: 'This Is About Category Art',
        },
        {
          _id: 'CAT70000',
          name: 'Hobbies',
          description: 'This Is About Category Hobbies',
        },
        {
          _id: 'CAT80000',
          name: 'Others',
          description: 'This Is About Category Others',
        },
      ],
    },
  });
};
