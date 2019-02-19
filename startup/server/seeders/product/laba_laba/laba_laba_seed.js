import seeder from '@cleverbeagle/seeder/index.min';
import Products from '../../../../../api/Products/Products';
import Images from '../../../../../api/Images/Images';
import Files from '../../../../../api/Files/Files';

export const labaLabaProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG40000',
          fileId: 'PFPRDCOVER100000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG40000',
          fileId: 'PFPRDCOVER200000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG40000',
          fileId: 'PFPRDCOVER300000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG40000',
          fileId: 'PFPRDCOVER400000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG40000',
          fileId: 'PFPRDCOVER500000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG40000',
          fileId: 'PFPRDCOVER600000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
      ],
    },
  });
};

export const labaLabaProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRDCOVER100000ORG40000',
          refId: 'PRD100000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG40000',
              fileId: 'PFPRDCOVER100000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER200000ORG40000',
          refId: 'PRD200000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG40000',
              fileId: 'PFPRDCOVER200000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER300000ORG40000',
          refId: 'PRD300000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG40000',
              fileId: 'PFPRDCOVER300000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER400000ORG40000',
          refId: 'PRD400000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG40000',
              fileId: 'PFPRDCOVER400000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER500000ORG40000',
          refId: 'PRD500000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG40000',
              fileId: 'PFPRDCOVER500000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER600000ORG40000',
          refId: 'PRD600000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI60000ORG40000',
              fileId: 'PFPRDCOVER600000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const labaLabaProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG40000',
          fileId: 'PFPRD100000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG40000',
          fileId: 'PFPRD200000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG40000',
          fileId: 'PFPRD300000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI40000ORG40000',
          fileId: 'PFPRD400000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI50000ORG40000',
          fileId: 'PFPRD500000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI60000ORG40000',
          fileId: 'PFPRD600000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
      ],
    },
  });
};

export const labaLabaProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRD100000ORG40000',
          refId: 'PRD100000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG40000',
              fileId: 'PFPRD100000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD200000ORG40000',
          refId: 'PRD200000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG40000',
              fileId: 'PFPRD200000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD300000ORG40000',
          refId: 'PRD300000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG40000',
              fileId: 'PFPRD300000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD400000ORG40000',
          refId: 'PRD400000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG40000',
              fileId: 'PFPRD400000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD500000ORG40000',
          refId: 'PRD500000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG40000',
              fileId: 'PFPRD500000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD600000ORG40000',
          refId: 'PRD600000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI60000ORG40000',
              fileId: 'PFPRD600000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const labaLabaProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG40000',
          userId,
          name: 'Wheel Missing',
          description: 'Estimate Price : Rp 125.000 - Rp 250.000',
          price: '125000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
          files: [
            {
              _id: 'PFPRD100000ORG40000',
              refId: 'PRD100000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG40000',
                  fileId: 'PFPRD100000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG40000',
          userId,
          name: "Zipper's Head",
          description: 'Estimate Price : Rp 50.000 - Rp 125.000',
          price: '50000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
          files: [
            {
              _id: 'PFPRD200000ORG40000',
              refId: 'PRD200000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG40000',
                  fileId: 'PFPRD200000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG40000',
          userId,
          name: 'Trolley Missing / Broken',
          description: 'Estimate Price : Rp 150.000 - Rp 300.000.',
          price: '150000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
          files: [
            {
              _id: 'PFPRD300000ORG40000',
              refId: 'PRD300000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG40000',
                  fileId: 'PFPRD300000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD400000ORG40000',
          userId,
          name: 'Zipper',
          description:
            'Estimate Price : Rp 200.000 - Rp 500.000 FREE antar jemput barang untuk daerah Jabodetabek.',
          price: '200000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
          files: [
            {
              _id: 'PFPRD400000ORG40000',
              refId: 'PRD400000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI40000ORG40000',
                  fileId: 'PFPRD400000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD500000ORG40000',
          userId,
          name: 'Handle Missing / Broken',
          description: 'Estimate Price : Rp 125.000 - Rp 250.000.',
          price: '125000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
          files: [
            {
              _id: 'PFPRD500000ORG40000',
              refId: 'PRD500000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI50000ORG40000',
                  fileId: 'PFPRD500000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD600000ORG40000',
          userId,
          name: 'Combination Lock',
          description: 'Estimate Price : Rp 100.000 - Rp 150.000.',
          price: '100000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
          files: [
            {
              _id: 'PFPRD600000ORG40000',
              refId: 'PRD600000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI60000ORG40000',
                  fileId: 'PFPRD600000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
      ],
    },
  });
};