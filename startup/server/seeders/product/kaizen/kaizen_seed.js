import seeder from '@cleverbeagle/seeder/index.min';
import Products from '../../../../../api/Products/Products';
import Images from '../../../../../api/Images/Images';
import Files from '../../../../../api/Files/Files';

export const kaizenProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG20000',
          fileId: 'PFPRDCOVER100000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG20000',
          fileId: 'PFPRDCOVER200000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
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
          _id: 'PFPRDCOVER100000ORG20000',
          refId: 'PRD100000ORG20000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG20000',
              fileId: 'PFPRDCOVER100000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER200000ORG20000',
          refId: 'PRD200000ORG20000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG20000',
              fileId: 'PFPRDCOVER200000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
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
          fileId: 'PFPRD100000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG20000',
          fileId: 'PFPRD200000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
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
          _id: 'PFPRD100000ORG20000',
          refId: 'PRD100000ORG20000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG20000',
              fileId: 'PFPRD100000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD200000ORG20000',
          refId: 'PRD200000ORG20000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG20000',
              fileId: 'PFPRD200000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
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
          files: [
            {
              _id: 'PFPRD100000ORG20000',
              refId: 'PRD100000ORG20000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG20000',
                  fileId: 'PFPRD100000ORG20000',
                  imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
                },
              ],
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
          files: [
            {
              _id: 'PFPRD200000ORG20000',
              refId: 'PRD200000ORG20000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG20000',
                  fileId: 'PFPRD200000ORG20000',
                  imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
      ],
    },
  });
};
