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

export const kaizenDisplayPictureFileSeed = (userId) => {
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
              imageSeed(userId, '/assets/kaizen/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const kaizenProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG20000',
          fileId: 'PRDFCOVER100000ORG20000',
          imgUrl: '/assets/kaizen/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG20000',
          fileId: 'PRDFCOVER200000ORG20000',
          imgUrl: '/assets/kaizen/_products/cover_product_2.jpeg',
        },
      ],
    },
  });
};

export const kaizenProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDFCOVER100000ORG20000',
          refId: 'PRD100000ORG20000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER200000ORG20000',
          refId: 'PRD200000ORG20000',
          refType: 'ProductCover',
        },
      ],
    },
  });
};

export const kaizenProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG20000',
          fileId: 'PRDF100000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG20000',
          fileId: 'PRDF200000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_2.jpeg',
        },
      ],
    },
  });
};

export const kaizenProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDF100000ORG20000',
          refId: 'PRD100000ORG20000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF200000ORG20000',
          refId: 'PRD200000ORG20000',
          refType: 'Portfolio',
        },
      ],
    },
  });
};

export const kaizenProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG20000',
          userId,
          name: 'Promo Pijat Tradisional 1 (POTONGAN 50K)',
          description:
            'Gunakan kode voucher SIDEBEEPKAIZEN untuk mendapatkan jasa ini dari 130K menjadi hanya 80K !!',
          price: '130000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: '﻿CAT30000',
              name: 'Beauty',
            },
          ],
        },
        {
          _id: 'PRD200000ORG20000',
          userId,
          name: 'Face Accupresure',
          description: 'This is description about Face Accupresure.',
          price: '170000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: '﻿CAT30000',
              name: 'Beauty',
            },
          ],
        },
      ],
    },
  });
};
