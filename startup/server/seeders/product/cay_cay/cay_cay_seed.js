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

export const cayCayDisplayPictureFileSeed = (userId) => {
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
              imageSeed(userId, '/assets/cay_cay/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const cayCayProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG10000',
          fileId: 'PRDFCOVER100000ORG10000',
          imgUrl: '/assets/cay_cay/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG10000',
          fileId: 'PRDFCOVER200000ORG10000',
          imgUrl: '/assets/cay_cay/_products/cover_product_2.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG10000',
          fileId: 'PRDFCOVER300000ORG10000',
          imgUrl: '/assets/cay_cay/_products/cover_product_3.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG10000',
          fileId: 'PRDFCOVER400000ORG10000',
          imgUrl: '/assets/cay_cay/_products/cover_product_4.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG10000',
          fileId: 'PRDFCOVER500000ORG10000',
          imgUrl: '/assets/cay_cay/_products/cover_product_5.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG10000',
          fileId: 'PRDFCOVER600000ORG10000',
          imgUrl: '/assets/cay_cay/_products/cover_product_6.jpeg',
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
          _id: 'PRDFCOVER100000ORG10000',
          refId: 'PRD100000ORG10000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER200000ORG10000',
          refId: 'PRD200000ORG10000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER300000ORG10000',
          refId: 'PRD300000ORG10000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER400000ORG10000',
          refId: 'PRD400000ORG10000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER500000ORG10000',
          refId: 'PRD500000ORG10000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER600000ORG10000',
          refId: 'PRD600000ORG10000',
          refType: 'ProductCover',
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
          fileId: 'PRDF100000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG10000',
          fileId: 'PRDF200000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI30000ORG10000',
          fileId: 'PRDF300000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_3.jpeg',
        },
        {
          _id: 'PRDI40000ORG10000',
          fileId: 'PRDF400000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_4.jpeg',
        },
        {
          _id: 'PRDI50000ORG10000',
          fileId: 'PRDF500000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_5.jpeg',
        },
        {
          _id: 'PRDI60000ORG10000',
          fileId: 'PRDF600000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_6.jpeg',
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
          _id: 'PRDF100000ORG10000',
          refId: 'PRD100000ORG10000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF200000ORG10000',
          refId: 'PRD200000ORG10000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF300000ORG10000',
          refId: 'PRD300000ORG10000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF400000ORG10000',
          refId: 'PRD400000ORG10000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF500000ORG10000',
          refId: 'PRD500000ORG10000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF600000ORG10000',
          refId: 'PRD600000ORG10000',
          refType: 'Portfolio',
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
        },
      ],
    },
  });
};
