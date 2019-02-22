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

export const lesEliteDisplayPictureFileSeed = (userId) => {
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
              imageSeed(userId, '/assets/les_elite/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const lesEliteProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG50000',
          fileId: '﻿PFPRDCOVER100000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG50000',
          fileId: 'PFPRDCOVER200000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_2.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG50000',
          fileId: 'PFPRDCOVER300000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_3.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG50000',
          fileId: 'PFPRDCOVER400000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_4.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG50000',
          fileId: 'PFPRDCOVER500000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_5.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG50000',
          fileId: 'PFPRDCOVER600000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_6.jpeg',
        },
        {
          _id: 'PRDICOVER70000ORG50000',
          fileId: 'PFPRDCOVER700000ORG50000',
          imgUrl: '/assets/les_elite/_products/cover_product_7.jpeg',
        },
      ],
    },
  });
};

export const lesEliteProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: '﻿PFPRDCOVER100000ORG50000',
          refId: 'PRD100000ORG50000',
          refType: 'ProductCover',
        },
        {
          _id: 'PFPRDCOVER200000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'ProductCover',
        },
        {
          _id: 'PFPRDCOVER300000ORG50000',
          refId: 'PRD300000ORG50000',
          refType: 'ProductCover',
        },
        {
          _id: 'PFPRDCOVER400000ORG50000',
          refId: 'PRD400000ORG50000',
          refType: 'ProductCover',
        },
        {
          _id: 'PFPRDCOVER500000ORG50000',
          refId: 'PRD500000ORG50000',
          refType: 'ProductCover',
        },
        {
          _id: 'PFPRDCOVER600000ORG50000',
          refId: 'PRD600000ORG50000',
          refType: 'ProductCover',
        },
        {
          _id: 'PFPRDCOVER700000ORG50000',
          refId: 'PRD700000ORG50000',
          refType: 'ProductCover',
        },
      ],
    },
  });
};

export const lesEliteProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG50000',
          fileId: 'PFPRD100000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG50000',
          fileId: 'PFPRD200000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI30000ORG50000',
          fileId: 'PFPRD300000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_3.jpeg',
        },
        {
          _id: 'PRDI40000ORG50000',
          fileId: 'PFPRD400000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_4.jpeg',
        },
        {
          _id: 'PRDI50000ORG50000',
          fileId: 'PFPRD500000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_5.jpeg',
        },
        {
          _id: 'PRDI60000ORG50000',
          fileId: 'PFPRD600000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_6.jpeg',
        },
        {
          _id: 'PRDI70000ORG50000',
          fileId: 'PFPRD700000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_7.jpeg',
        },
      ],
    },
  });
};

export const lesEliteProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRD100000ORG50000',
          refId: 'PRD100000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG50000',
              fileId: 'PFPRD100000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD200000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG50000',
              fileId: 'PFPRD200000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_2.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD300000ORG50000',
          refId: 'PRD300000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG50000',
              fileId: 'PFPRD300000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_3.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD400000ORG50000',
          refId: 'PRD400000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG50000',
              fileId: 'PFPRD400000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_4.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD500000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG50000',
              fileId: 'PFPRD500000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_5.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD600000ORG50000',
          refId: 'PRD600000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI60000ORG50000',
              fileId: 'PFPRD600000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_6.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD700000ORG50000',
          refId: 'PRD700000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI70000ORG50000',
              fileId: 'PFPRD700000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_7.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const lesEliteProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG50000',
          userId,
          name: 'Regular',
          description:
            'Perawatan mobil dalam 30 menit termasuk - Carnouba Wax - Semir Ban - Exterior Cleaning - Interior Cleaning - Vacuum.',
          price: '100000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
        {
          _id: 'PRD200000ORG50000',
          userId,
          name: 'Promo #Berimlek Ultra Nano',
          description:
            'Harga normal Rp 150.000, disc. 50% --> Rp 75.000. Perawatan Mobil 60-90 menit Termasuk -Semir Ban-Exterior Cleaning-Interior Cleaning-Vacuum-Nano Wax-Trim Dressing-Engine Dressing. BERLAKU UNTUK PEMBAYARAN NON-CASH',
          price: '75000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
        {
          _id: 'PRD300000ORG50000',
          userId,
          name: 'PRO Service',
          description:
            'Perawatan Mobil dalam 2-3 jam termasuk : - Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Trim Dressing -Engine Dressing.',
          price: '250000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
        {
          _id: 'PRD400000ORG50000',
          userId,
          name: 'Premium',
          description:
            'Perawatan Mobil dalam 2-3 jam termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
          price: '350000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
        {
          _id: 'PRD500000ORG50000',
          userId,
          name: 'Glass Water Sport',
          description: 'Perawatan Mobil penanganan Glass Water Spot.',
          price: '150000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
        {
          _id: 'PRD600000ORG50000',
          userId,
          name: 'Body Water Spot',
          description: 'Perawatan mobil untuk Body Water Spot.',
          price: '250000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
        {
          _id: 'PRD700000ORG50000',
          userId,
          name: 'Poles / Salon',
          description:
            'Perawatan Mobil dalam 4 jam Termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
          price: '1250000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT10000',
              name: 'Repair',
            },
          ],
        },
      ],
    },
  });
};
