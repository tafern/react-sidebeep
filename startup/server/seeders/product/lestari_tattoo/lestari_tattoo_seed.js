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

export const lestariTattooDisplayPictureFileSeed = (userId) => {
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
              imageSeed(userId, '/assets/lestari_tattoo/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const lestariTattooProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG60000',
          fileId: 'PFPRDCOVER100000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG60000',
          fileId: 'PFPRDCOVER200000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_products/cover_product_2.jpeg',
        },
      ],
    },
  });
};

export const lestariTattooProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRDCOVER100000ORG60000',
          refId: 'PRD100000ORG60000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG60000',
              fileId: 'PFPRDCOVER100000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_products/cover_product_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRDCOVER200000ORG60000',
          refId: 'PRD200000ORG60000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG60000',
              fileId: 'PFPRDCOVER200000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_products/cover_product_2jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const lestariTattooProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG60000',
          fileId: 'PFPRD100000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG60000',
          fileId: 'PFPRD200000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_2.jpeg',
        },
      ],
    },
  });
};

export const lestariTattooProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PFPRD100000ORG60000',
          refId: 'PRD100000ORG60000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG60000',
              fileId: 'PFPRD100000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PFPRD200000ORG60000',
          refId: 'PRD200000ORG60000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG60000',
              fileId: 'PFPRD200000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_2.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const lestariTattooProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG60000',
          userId,
          name: 'Permanent Tattoo',
          description:
            'Jasa tattoo permanen min. price Rp 500.000 (uk 5x5cm) Harga persenti meter persegi Rp 15.000.',
          price: '500000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT60000',
              name: 'Art',
            },
          ],
        },
        {
          _id: 'PRD200000ORG60000',
          userId,
          name: 'Permanent Tattoo 10x10',
          description: 'Jasa tattoo permanent standar untuk ukuran 10x10 CM',
          price: '1500000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT60000',
              name: 'Art',
            },
          ],
        },
      ],
    },
  });
};
