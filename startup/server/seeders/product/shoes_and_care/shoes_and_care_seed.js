import seeder from '@cleverbeagle/seeder/index.min';
import Products from '../../../../../api/Products/Products';
import Images from '../../../../../api/Images/Images';
import Files from '../../../../../api/Files/Files';

const imageSeed = (userId, imgUrl, idOfFile) => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            fileId: idOfFile,
            imgUrl,
          };
        },
      },
    },
  });
};

export const shoesAndCareDisplayPictureFileSeed = (userId) => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            refId: userId,
            refType: 'ProfilePicture',
            dependentData(fileId) {
              imageSeed(userId, '/assets/shoes_and_care/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const shoesAndCareProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG80000',
          fileId: 'PRDFCOVER100000ORG80000',
          imgUrl: '/assets/shoes_and_care/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG80000',
          fileId: 'PRDFCOVER200000ORG80000',
          imgUrl: '/assets/shoes_and_care/_products/cover_product_2.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG80000',
          fileId: 'PRDFCOVER300000ORG80000',
          imgUrl: '/assets/shoes_and_care/_products/cover_product_3.jpeg',
        },
      ],
    },
  });
};

export const shoesAndCareProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDFCOVER100000ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER200000ORG80000',
          refId: 'PRD200000ORG80000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER300000ORG80000',
          refId: 'PRD300000ORG80000',
          refType: 'ProductCover',
        },
      ],
    },
  });
};

export const shoesAndCareProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG80000',
          fileId: 'PRDF100000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10001ORG80000',
          fileId: 'PRDF100001ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10002ORG80000',
          fileId: 'PRDF100002ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG80000',
          fileId: 'PRDF200000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI20001ORG80000',
          fileId: 'PRDF200001ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI20002ORG80000',
          fileId: 'PRDF200002ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI30000ORG80000',
          fileId: 'PRDF300000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_3.jpeg',
        },
        {
          _id: 'PRDI30001ORG80000',
          fileId: 'PRDF300001ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_3.jpeg',
        },
        {
          _id: 'PRDI30002ORG80000',
          fileId: 'PRDF300002ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_3.jpeg',
        },
      ],
    },
  });
};

export const shoesAndCareProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDF100000ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF100001ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF100002ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF200000ORG80000',
          refId: 'PRD200000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF200001ORG80000',
          refId: 'PRD200000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF200002ORG80000',
          refId: 'PRD200000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF300000ORG80000',
          refId: 'PRD300000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF300001ORG80000',
          refId: 'PRD300000ORG80000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF300002ORG80000',
          refId: 'PRD300000ORG80000',
          refType: 'Portfolio',
        },
      ],
    },
  });
};

export const shoesAndCareProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG80000',
          userId,
          name: 'Deep Cleaning Shoes',
          description:
            'Deep cleaning, ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA. Pembayaran Non Cash.',
          price: '85000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
        {
          _id: 'PRD200000ORG80000',
          userId,
          name: 'Bag Care Medium',
          description:
            'Untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
          price: '125000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
        {
          _id: 'PRD300000ORG80000',
          userId,
          name: 'Snapback Cleaning Hard',
          description:
            'Hanya untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
          price: '130000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
        },
      ],
    },
  });
};
