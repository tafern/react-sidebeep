import seeder from '@cleverbeagle/seeder/index.min';
import Products from '../../../../../api/Products/Products';
import Images from '../../../../../api/Images/Images';
import Files from '../../../../../api/Files/Files';

export const cayCayProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG10000',
          fileId: 'PFPRDCOVER100000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG10000',
          fileId: 'PFPRDCOVER200000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG10000',
          fileId: 'PFPRDCOVER300000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG10000',
          fileId: 'PFPRDCOVER400000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG10000',
          fileId: 'PFPRDCOVER500000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG10000',
          fileId: 'PFPRDCOVER600000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
      ],
    },
  });
};

export const cayCayProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRDCOVER100000ORG10000',
          refId: 'PRD100000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG10000',
              fileId: 'PFPRDCOVER100000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER200000ORG10000',
          refId: 'PRD200000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG10000',
              fileId: 'PFPRDCOVER200000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER300000ORG10000',
          refId: 'PRD300000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG10000',
              fileId: 'PFPRDCOVER300000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER400000ORG10000',
          refId: 'PRD400000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG10000',
              fileId: 'PFPRDCOVER400000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER500000ORG10000',
          refId: 'PRD500000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG10000',
              fileId: 'PFPRDCOVER500000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER600000ORG10000',
          refId: 'PRD600000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI60000ORG10000',
              fileId: 'PFPRDCOVER600000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const cayCayProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG10000',
          fileId: 'PFPRD100000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG10000',
          fileId: 'PFPRD200000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG10000',
          fileId: 'PFPRD300000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI40000ORG10000',
          fileId: 'PFPRD400000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI50000ORG10000',
          fileId: 'PFPRD500000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI60000ORG10000',
          fileId: 'PFPRD600000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
      ],
    },
  });
};

export const cayCayProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRD100000ORG10000',
          refId: 'PRD100000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG10000',
              fileId: 'PFPRD100000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD200000ORG10000',
          refId: 'PRD200000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG10000',
              fileId: 'PFPRD200000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD300000ORG10000',
          refId: 'PRD300000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG10000',
              fileId: 'PFPRD300000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD400000ORG10000',
          refId: 'PRD400000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG10000',
              fileId: 'PFPRD400000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD500000ORG10000',
          refId: 'PRD500000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG10000',
              fileId: 'PFPRD500000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD600000ORG10000',
          refId: 'PRD600000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI60000ORG10000',
              fileId: 'PFPRD600000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const cayCayProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG10000',
          userId,
          name: 'Promo #Berimlek 3D Haircut By Anash',
          description:
            'Promo Rp 325.000,- disc.50% --> Rp 162.500,-. Haircut dengan teknik 3D. Sudah termasuk cuci + blow',
          price: '162500',
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
              _id: 'PFPRD100000ORG10000',
              refId: 'PRD100000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG10000',
                  fileId: 'PFPRD100000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG10000',
          userId,
          name: 'Haircut By Alex',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '325000',
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
              _id: 'PFPRD200000ORG10000',
              refId: 'PRD200000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG10000',
                  fileId: 'PFPRD200000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG10000',
          userId,
          name: 'Haircut By Yusri',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '325000',
          viewCount: '52',
          orderCount: '23',
          categories: [
            {
              _id: '﻿CAT30000',
              name: 'Beauty',
            },
          ],
          files: [
            {
              _id: 'PFPRD300000ORG10000',
              refId: 'PRD300000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG10000',
                  fileId: 'PFPRD300000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD400000ORG10000',
          userId,
          name: 'Haircut By Poniman',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '230000',
          viewCount: '52',
          orderCount: '23',
          categories: [
            {
              _id: '﻿CAT30000',
              name: 'Beauty',
            },
          ],
          files: [
            {
              _id: 'PFPRD400000ORG10000',
              refId: 'PRD400000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI40000ORG10000',
                  fileId: 'PFPRD400000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD500000ORG10000',
          userId,
          name: 'Haircut By Budi',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '230000',
          viewCount: '12',
          orderCount: '13',
          categories: [
            {
              _id: '﻿CAT30000',
              name: 'Beauty',
            },
          ],
          files: [
            {
              _id: 'PFPRD500000ORG10000',
              refId: 'PRD500000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI50000ORG10000',
                  fileId: 'PFPRD500000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD600000ORG10000',
          userId,
          name: 'Haircut By Susi',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '230000',
          viewCount: '12',
          orderCount: '13',
          categories: [
            {
              _id: '﻿CAT30000',
              name: 'Beauty',
            },
          ],
          files: [
            {
              _id: 'PFPRD600000ORG10000',
              refId: 'PRD600000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI60000ORG10000',
                  fileId: 'PFPRD600000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
      ],
    },
  });
};
