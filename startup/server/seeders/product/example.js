import seeder from '@cleverbeagle/seeder/index.min';
import Products from '../../../../api/Products/Products';
import Images from '../../../../api/Images/Images';
import Files from '../../../../api/Files/Files';
import Reviews from '../../../../api/Reviews/Reviews';

export const reviewsSeed = (userId, date, productId) => {
  seeder(Reviews, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 3,
        seed(reviewIteration, faker) {
          return {
            userId,
            productId,
            review: faker.hacker.phrase(),
            createdAt: date,
          };
        },
      },
    },
  });
};

export const productCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG10000',
          fileId: 'PRDFCOVER100000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG10000',
          fileId: 'PRDFCOVER200000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG10000',
          fileId: 'PRDFCOVER300000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG10000',
          fileId: 'PRDFCOVER400000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG10000',
          fileId: 'PRDFCOVER500000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG10000',
          fileId: 'PRDFCOVER600000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG20000',
          fileId: 'PRDFCOVER100000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG20000',
          fileId: 'PRDFCOVER200000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG30000',
          fileId: 'PRDFCOVER100000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG30000',
          fileId: 'PRDFCOVER200000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG30000',
          fileId: 'PRDFCOVER300000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG40000',
          fileId: 'PRDFCOVER100000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG40000',
          fileId: 'PRDFCOVER200000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG40000',
          fileId: 'PRDFCOVER300000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG40000',
          fileId: 'PRDFCOVER400000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG40000',
          fileId: 'PRDFCOVER500000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG40000',
          fileId: 'PRDFCOVER600000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG50000',
          fileId: 'PRDFCOVER100000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG50000',
          fileId: 'PRDFCOVER200000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG50000',
          fileId: 'PRDFCOVER300000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG50000',
          fileId: 'PRDFCOVER400000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG50000',
          fileId: 'PRDFCOVER500000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER60000ORG50000',
          fileId: 'PRDFCOVER600000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER70000ORG50000',
          fileId: 'PRDFCOVER700000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG60000',
          fileId: 'PRDFCOVER100000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG60000',
          fileId: 'PRDFCOVER200000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG70000',
          fileId: 'PRDFCOVER100000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG70000',
          fileId: 'PRDFCOVER200000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG70000',
          fileId: 'PRDFCOVER300000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER40000ORG70000',
          fileId: 'PRDFCOVER400000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER50000ORG70000',
          fileId: 'PRDFCOVER500000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER10000ORG80000',
          fileId: 'PRDFCOVER100000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG80000',
          fileId: 'PRDFCOVER200000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG80000',
          fileId: 'PRDFCOVER300000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
      ],
    },
  });
};

export const productCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDFCOVER100000ORG10000',
          refId: 'PRD100000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG10000',
              fileId: 'PRDFCOVER100000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG10000',
          refId: 'PRD200000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG10000',
              fileId: 'PRDFCOVER200000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER300000ORG10000',
          refId: 'PRD300000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG10000',
              fileId: 'PRDFCOVER300000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER400000ORG10000',
          refId: 'PRD400000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG10000',
              fileId: 'PRDFCOVER400000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER500000ORG10000',
          refId: 'PRD500000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG10000',
              fileId: 'PRDFCOVER500000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER600000ORG10000',
          refId: 'PRD600000ORG10000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI60000ORG10000',
              fileId: 'PRDFCOVER600000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG20000',
          refId: 'PRD100000ORG20000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG20000',
              fileId: 'PRDFCOVER100000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG20000',
          refId: 'PRD200000ORG20000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG20000',
              fileId: 'PRDFCOVER200000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG30000',
          refId: 'PRD100000ORG30000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG30000',
              fileId: 'PRDFCOVER100000ORG30000',
              imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG30000',
          refId: 'PRD200000ORG30000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG30000',
              fileId: 'PRDFCOVER200000ORG30000',
              imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER300000ORG30000',
          refId: 'PRD300000ORG30000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG30000',
              fileId: 'PRDFCOVER300000ORG30000',
              imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG40000',
          refId: 'PRD100000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG40000',
              fileId: 'PRDFCOVER100000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG40000',
          refId: 'PRD200000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG40000',
              fileId: 'PRDFCOVER200000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER300000ORG40000',
          refId: 'PRD300000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG40000',
              fileId: 'PRDFCOVER300000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER400000ORG40000',
          refId: 'PRD400000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG40000',
              fileId: 'PRDFCOVER400000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER500000ORG40000',
          refId: 'PRD500000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG40000',
              fileId: 'PRDFCOVER500000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER600000ORG40000',
          refId: 'PRD600000ORG40000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI60000ORG40000',
              fileId: 'PRDFCOVER600000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG50000',
          refId: 'PRD100000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG50000',
              fileId: 'PRDFCOVER100000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG50000',
              fileId: 'PRDFCOVER200000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER300000ORG50000',
          refId: 'PRD300000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG50000',
              fileId: 'PRDFCOVER300000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER400000ORG50000',
          refId: 'PRD400000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG50000',
              fileId: 'PRDFCOVER400000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER500000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG50000',
              fileId: 'PRDFCOVER500000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER600000ORG50000',
          refId: 'PRD600000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI60000ORG50000',
              fileId: 'PRDFCOVER600000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER700000ORG50000',
          refId: 'PRD700000ORG50000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI70000ORG50000',
              fileId: 'PRDFCOVER700000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG60000',
          refId: 'PRD100000ORG60000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG60000',
              fileId: 'PRDFCOVER100000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG60000',
          refId: 'PRD200000ORG60000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG60000',
              fileId: 'PRDFCOVER200000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG70000',
          refId: 'PRD100000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG70000',
              fileId: 'PRDFCOVER100000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG70000',
          refId: 'PRD200000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG70000',
              fileId: 'PRDFCOVER200000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER300000ORG70000',
          refId: 'PRD300000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG70000',
              fileId: 'PRDFCOVER300000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER400000ORG70000',
          refId: 'PRD400000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI40000ORG70000',
              fileId: 'PRDFCOVER400000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER500000ORG70000',
          refId: 'PRD500000ORG70000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI50000ORG70000',
              fileId: 'PRDFCOVER500000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER100000ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI10000ORG80000',
              fileId: 'PRDFCOVER100000ORG80000',
              imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER200000ORG80000',
          refId: 'PRD200000ORG80000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI20000ORG80000',
              fileId: 'PRDFCOVER200000ORG80000',
              imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDFCOVER300000ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'ProductCover',
          images: [
            {
              _id: 'PRDI30000ORG80000',
              fileId: 'PRDFCOVER300000ORG80000',
              imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const productPortfolioImageSeed = () => {
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
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG10000',
          fileId: 'PRDF300000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI40000ORG10000',
          fileId: 'PRDF400000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI50000ORG10000',
          fileId: 'PRDF500000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI60000ORG10000',
          fileId: 'PRDF600000ORG10000',
          imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG20000',
          fileId: 'PRDF100000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG20000',
          fileId: 'PRDF200000ORG20000',
          imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG30000',
          fileId: 'PRDF100000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG30000',
          fileId: 'PRDF200000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG30000',
          fileId: 'PRDF300000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG40000',
          fileId: 'PRDF100000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG40000',
          fileId: 'PRDF200000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG40000',
          fileId: 'PRDF300000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI40000ORG40000',
          fileId: 'PRDF400000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI50000ORG40000',
          fileId: 'PRDF500000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI60000ORG40000',
          fileId: 'PRDF600000ORG40000',
          imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG50000',
          fileId: 'PRDF100000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG50000',
          fileId: 'PRDF200000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG50000',
          fileId: 'PRDF300000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI40000ORG50000',
          fileId: 'PRDF400000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI50000ORG50000',
          fileId: 'PRDF500000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI60000ORG50000',
          fileId: 'PRDF600000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI70000ORG50000',
          fileId: 'PRDF700000ORG50000',
          imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG60000',
          fileId: 'PRDF100000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG60000',
          fileId: 'PRDF200000ORG60000',
          imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG70000',
          fileId: 'PRDF100000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG70000',
          fileId: 'PRDF200000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG70000',
          fileId: 'PRDF300000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI40000ORG70000',
          fileId: 'PRDF400000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI50000ORG70000',
          fileId: 'PRDF500000ORG70000',
          imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI10000ORG80000',
          fileId: 'PRDF100000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG80000',
          fileId: 'PRDF200000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI30000ORG80000',
          fileId: 'PRDF300000ORG80000',
          imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
      ],
    },
  });
};

export const productPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDF100000ORG10000',
          refId: 'PRD100000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG10000',
              fileId: 'PRDF100000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG10000',
          refId: 'PRD200000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG10000',
              fileId: 'PRDF200000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF300000ORG10000',
          refId: 'PRD300000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG10000',
              fileId: 'PRDF300000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF400000ORG10000',
          refId: 'PRD400000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG10000',
              fileId: 'PRDF400000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF500000ORG10000',
          refId: 'PRD500000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG10000',
              fileId: 'PRDF500000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF600000ORG10000',
          refId: 'PRD600000ORG10000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI60000ORG10000',
              fileId: 'PRDF600000ORG10000',
              imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG20000',
          refId: 'PRD100000ORG20000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG20000',
              fileId: 'PRDF100000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG20000',
          refId: 'PRD200000ORG20000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG20000',
              fileId: 'PRDF200000ORG20000',
              imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG30000',
          refId: 'PRD100000ORG30000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG30000',
              fileId: 'PRDF100000ORG30000',
              imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG30000',
          refId: 'PRD200000ORG30000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG30000',
              fileId: 'PRDF200000ORG30000',
              imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF300000ORG30000',
          refId: 'PRD300000ORG30000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG30000',
              fileId: 'PRDF300000ORG30000',
              imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG40000',
          refId: 'PRD100000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG40000',
              fileId: 'PRDF100000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG40000',
          refId: 'PRD200000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG40000',
              fileId: 'PRDF200000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF300000ORG40000',
          refId: 'PRD300000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG40000',
              fileId: 'PRDF300000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF400000ORG40000',
          refId: 'PRD400000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG40000',
              fileId: 'PRDF400000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF500000ORG40000',
          refId: 'PRD500000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG40000',
              fileId: 'PRDF500000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF600000ORG40000',
          refId: 'PRD600000ORG40000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI60000ORG40000',
              fileId: 'PRDF600000ORG40000',
              imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG50000',
          refId: 'PRD100000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG50000',
              fileId: 'PRDF100000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG50000',
              fileId: 'PRDF200000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF300000ORG50000',
          refId: 'PRD300000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG50000',
              fileId: 'PRDF300000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF400000ORG50000',
          refId: 'PRD400000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG50000',
              fileId: 'PRDF400000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF500000ORG50000',
          refId: 'PRD200000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG50000',
              fileId: 'PRDF500000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF600000ORG50000',
          refId: 'PRD600000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI60000ORG50000',
              fileId: 'PRDF600000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF700000ORG50000',
          refId: 'PRD700000ORG50000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI70000ORG50000',
              fileId: 'PRDF700000ORG50000',
              imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG60000',
          refId: 'PRD100000ORG60000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG60000',
              fileId: 'PRDF100000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG60000',
          refId: 'PRD200000ORG60000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG60000',
              fileId: 'PRDF200000ORG60000',
              imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG70000',
          refId: 'PRD100000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG70000',
              fileId: 'PRDF100000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG70000',
          refId: 'PRD200000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG70000',
              fileId: 'PRDF200000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF300000ORG70000',
          refId: 'PRD300000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG70000',
              fileId: 'PRDF300000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF400000ORG70000',
          refId: 'PRD400000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI40000ORG70000',
              fileId: 'PRDF400000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF500000ORG70000',
          refId: 'PRD500000ORG70000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI50000ORG70000',
              fileId: 'PRDF500000ORG70000',
              imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF100000ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI10000ORG80000',
              fileId: 'PRDF100000ORG80000',
              imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF200000ORG80000',
          refId: 'PRD200000ORG80000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI20000ORG80000',
              fileId: 'PRDF200000ORG80000',
              imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
        {
          _id: 'PRDF300000ORG80000',
          refId: 'PRD100000ORG80000',
          refType: 'Portfolio',
          images: [
            {
              _id: 'PRDI30000ORG80000',
              fileId: 'PRDF300000ORG80000',
              imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
            },
          ],
        },
      ],
    },
  });
};

export const productsSeed = () => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG10000',
          userId: 'USR10000',
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
              _id: 'PRDF100000ORG10000',
              refId: 'PRD100000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG10000',
                  fileId: 'PRDF100000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG10000',
          userId: 'USR10000',
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
              _id: 'PRDF200000ORG10000',
              refId: 'PRD200000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG10000',
                  fileId: 'PRDF200000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG10000',
          userId: 'USR10000',
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
              _id: 'PRDF300000ORG10000',
              refId: 'PRD300000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG10000',
                  fileId: 'PRDF300000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD400000ORG10000',
          userId: 'USR10000',
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
              _id: 'PRDF400000ORG10000',
              refId: 'PRD400000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI40000ORG10000',
                  fileId: 'PRDF400000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD500000ORG10000',
          userId: 'USR10000',
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
              _id: 'PRDF500000ORG10000',
              refId: 'PRD500000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI50000ORG10000',
                  fileId: 'PRDF500000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD600000ORG10000',
          userId: 'USR10000',
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
              _id: 'PRDF600000ORG10000',
              refId: 'PRD600000ORG10000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI60000ORG10000',
                  fileId: 'PRDF600000ORG10000',
                  imgUrl: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG20000',
          userId: 'USR20000',
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
              _id: 'PRDF100000ORG20000',
              refId: 'PRD100000ORG20000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG20000',
                  fileId: 'PRDF100000ORG20000',
                  imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG20000',
          userId: 'USR20000',
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
              _id: 'PRDF200000ORG20000',
              refId: 'PRD200000ORG20000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG20000',
                  fileId: 'PRDF200000ORG20000',
                  imgUrl: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG30000',
          userId: 'USR30000',
          name: 'Custom Motor Kawasaki W175 Stage 1',
          description:
            'Kustom motor khusus untuk Kawasaki W175 step 1 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting). - Stoplamp & Breket - Jok (by request) - Katros Muffler (Full System)',
          price: '4350000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF100000ORG30000',
              refId: 'PRD100000ORG30000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG30000',
                  fileId: 'PRDF100000ORG30000',
                  imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG30000',
          userId: 'USR30000',
          name: 'Custom Motor Kawasaki W175 Stage 2',
          description:
            'Jasa Kustom Motor Kawasaki W175 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by request) - Katros Muffler (full sistem) - Skidplate & Breket - Cover Carvurator & Breket - Ban (lokal) - Stoplamp & Breket.',
          price: '6350000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF200000ORG30000',
              refId: 'PRD200000ORG30000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG30000',
                  fileId: 'PRDF200000ORG30000',
                  imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG30000',
          userId: 'USR30000',
          name: 'Custom Motor Kawasaki W175 Stage 3',
          description:
            'Jasa Kustom Motor Kawasaki W175 stage 3 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by reguest) - Katros Muffler (Full Sistem) - Skidplate & Breket - Cover Carburator - Ban (lokal) - Lampu depan 5.75 inch & Breket - Lampu Sein & Breket - Lampu Stop & Breket - Spidometer & Breket - Handgrip - Setang - Spion - Sok Breker Belakang 340mm.',
          price: '9000000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF300000ORG30000',
              refId: 'PRD300000ORG30000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG30000',
                  fileId: 'PRDF300000ORG30000',
                  imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG40000',
          userId: 'USR40000',
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
              _id: 'PRDF100000ORG40000',
              refId: 'PRD100000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG40000',
                  fileId: 'PRDF100000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG40000',
          userId: 'USR40000',
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
              _id: 'PRDF200000ORG40000',
              refId: 'PRD200000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG40000',
                  fileId: 'PRDF200000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG40000',
          userId: 'USR40000',
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
              _id: 'PRDF300000ORG40000',
              refId: 'PRD300000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG40000',
                  fileId: 'PRDF300000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD400000ORG40000',
          userId: 'USR40000',
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
              _id: 'PRDF400000ORG40000',
              refId: 'PRD400000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI40000ORG40000',
                  fileId: 'PRDF400000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD500000ORG40000',
          userId: 'USR40000',
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
              _id: 'PRDF500000ORG40000',
              refId: 'PRD500000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI50000ORG40000',
                  fileId: 'PRDF500000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD600000ORG40000',
          userId: 'USR40000',
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
              _id: 'PRDF600000ORG40000',
              refId: 'PRD600000ORG40000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI60000ORG40000',
                  fileId: 'PRDF600000ORG40000',
                  imgUrl: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF100000ORG50000',
              refId: 'PRD100000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG50000',
                  fileId: 'PRDF100000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF200000ORG50000',
              refId: 'PRD200000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG50000',
                  fileId: 'PRDF200000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF300000ORG50000',
              refId: 'PRD300000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG50000',
                  fileId: 'PRDF300000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD400000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF400000ORG50000',
              refId: 'PRD400000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI40000ORG50000',
                  fileId: 'PRDF400000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD500000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF500000ORG50000',
              refId: 'PRD200000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI50000ORG50000',
                  fileId: 'PRDF500000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD600000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF600000ORG50000',
              refId: 'PRD600000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI60000ORG50000',
                  fileId: 'PRDF600000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD700000ORG50000',
          userId: 'USR50000',
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
          files: [
            {
              _id: 'PRDF700000ORG50000',
              refId: 'PRD700000ORG50000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI70000ORG50000',
                  fileId: 'PRDF700000ORG50000',
                  imgUrl: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG60000',
          userId: 'USR60000',
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
          files: [
            {
              _id: 'PRDF100000ORG60000',
              refId: 'PRD100000ORG60000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG60000',
                  fileId: 'PRDF100000ORG60000',
                  imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG60000',
          userId: 'USR60000',
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
          files: [
            {
              _id: 'PRDF200000ORG60000',
              refId: 'PRD200000ORG60000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG60000',
                  fileId: 'PRDF200000ORG60000',
                  imgUrl: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG70000',
          userId: 'USR60000',
          name: 'One Day Trip 3 Pulau & Lampion Party',
          description:
            '2 Des 2018 9 Des 2018 25 Des 2018 Price Include: 1. Perahu Muara kamal - Pulau [ PP ] 2.Tiket Retribusi Pulau Kelor 3.Tiket Retribusi Pulau Onrust 4.Tiket Retribusi Pulau Cipir 5.Guide Lokal & Tour Leader 6.Lampion / Sky Lantern 7.Free poto 8. floaties 9.laybag 10.Tiket peron 11.Tips leader 12. Pelampung Price Exclude: - Water sport (banana boat dan donut boat) - Makan siang Meeting Point: Gedung Biru Dermaga Muara Kamal (search on Google Maps) . Hari 1 08.30 : Meeting point Dermaga Muara Kamal 09.00 : Persiapan berangkat menuju Pulau Kelor 10:00 : Tiba di pulau Kelor, acara bebas, Explore Benteng Martello 11:30 : Berangkat menuju Pulau Onrust 12.00 : Tiba di pulau onrust, wisata sejarah keliling pulau, foto-foto dan ISHOMA 15.00 : Perjalanan Menuju Pulau cipir 15.30 : Tiba di Pulau Cipir acara bebas, Berenang, Catch sunset 18.00 : Penerbangan Lampion 18.30 : Kembali ke Dermaga dan trip selesai Note : Waktu dapat berubah menyesuaikan dengan kondisi lapangan.',
          price: '85000',
          viewCount: '12',
          orderCount: '33',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF100000ORG70000',
              refId: 'PRD100000ORG70000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG70000',
                  fileId: 'PRDF100000ORG70000',
                  imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG70000',
          userId: 'USR70000',
          name: 'Open Trip Dieng Negeri Diatas Awan (3D2N)',
          description:
            '30-2 DESEMBER 2018 21-23 DESEMBER 2018 Meeting Point : Jakarta : Plaza Semanggi, Lobby Utara depan Maxx corner jam 19.00 Bekasi : SPBU Pertamina sebelah Giant Bekasi depan Brightmart jam 20.00 Include : 1. Transportasi Standar Pariwisata AC Jakarta - Dieng PP include driver, bbm, tol dan parkir 2. Makan 3x 3. Penginapan Homestay (sharing room, 3-4 orang/kamar) 4. Tiket Masuk Semua Destinasi (Dieng, Candi Arjuna, Kawah Sikidang, Batu Ratapan Angin, Dieng Teater, Golden Sunrise Puncak Sikunir, dan Tuk Bimo Lukar) 5. Dokumentasi 6. Tour Leader Mau Kemana Si 7. Guide Lokal Dieng . Exclude : 1. Kebutuhan pribadi 2. Makan diluar paket 3. Tips Driver Note : Untuk itinerary bisa langsung chat yaa',
          price: '590000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF200000ORG70000',
              refId: 'PRD200000ORG70000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG70000',
                  fileId: 'PRDF200000ORG70000',
                  imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG70000',
          userId: 'USR70000',
          name: 'Open Trip Pahawang Start Jakarta (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START JAKARTA MEETING POINT : Plaza Semanggi Lobby Utara Depan Maxx Corner jam 20.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
          price: '625000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF300000ORG70000',
              refId: 'PRD300000ORG70000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG70000',
                  fileId: 'PRDF300000ORG70000',
                  imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD400000ORG70000',
          userId: 'USR70000',
          name: 'Open Trip Pahawang Start Merak (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) START MERAK MEETING POINT : ALFAMART Pelabuhan Merak jam 23.00 FASILITAS a. Transportasi AC antar jemput peserta dari MEETING POINT menuju Dermaga Ketapang Lampung Selatan (PP). b. Penginapan di Pulau Pahawang Besar (Non AC). c. Pelampung Selama Wisata. d. Perahu untuk Kegiatan Snorkeling dan Jelajah Pulau. e. Makan 4x (Prasmanan) F. Tour Leader asyik. g. Tour Guide dari Pulau Pahawang. h. Tiket Kapal Ferry Pelabuhan Merak – Bakauheni (PP). i. Asuransi Penyebrangan Merak – Bakauheni (PP). J. Air Mineral Selama Trip K.Dokumentasi Selama Wisata (Upwater & Underwater). Exclude -kebutuhan pribadi -alat snorckling (Rp.80.000) DESTINASI TRIP PULAU PAHAWANG 1. Pulau Pahawang Besar 2. Penangkaran Ikan Nemo 3. Pulau Kelagian Kecil 4. Pulau Kelagian Besar 5. Cukuh Bedil 6. Pulau Pahawang Kecil 7. Gosong Bekri 8. Pulau Balak 9. Pulau Tanjung Putus (Optional) 10. Gosong Pancong (optional) 11. Gosong Kalangan (optional)',
          price: '450000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF400000ORG70000',
              refId: 'PRD400000ORG70000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI40000ORG70000',
                  fileId: 'PRDF400000ORG70000',
                  imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD500000ORG70000',
          userId: 'USR70000',
          name: 'Open Trip Peucang Start Jakarta (3D2N)',
          description:
            'EVERY WEEKEND (SETIAP JUMAT-MINGGU) MEETING POINT : PLAZA SEMANGGI Lobby Utara Depan Maxx Corner Jam 20.00 Include : - Transportasi dari Meeting Point PP ke Desa Sumur - makan 5x (bbq 1x) - kapal wisata 2hari - air mineral selama tour - penginapan di peucang - guide - dokumentasi Underwater dan uppwater - asuransi TNUK - semua tiket wisata - restribusi wisata #tambahan - teh gula & kopi - buah setelah snorkling 1 - dokumentasi drone - Floaties foto2 . Excluding: - canoeing sungai cigenteur (idr. 50.000/pax) - alat snorkling: Idr. 80.000/org (lengkap dengan fin) - pengeluaran pribadi - tips guide (suka rela) - hal-hal selain di atas *penginapan pasti di pulau peucangnya *dokumentasi underwater gopro hero Destinasi tujuan wisata: (tracking and hoping island) Pulau Peucang, cidaon, Karang copong, Pulau Badul, Handeleum, sungai cigenteur (spot snorkling) Ciapus, suminoh, citerjun, lagoon kobak, pulau badul, pulau oar',
          price: '690000',
          viewCount: '22',
          orderCount: '13',
          categories: [
            {
              _id: 'CAT70000',
              name: 'Hobbies',
            },
          ],
          files: [
            {
              _id: 'PRDF500000ORG70000',
              refId: 'PRD500000ORG70000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI50000ORG70000',
                  fileId: 'PRDF500000ORG70000',
                  imgUrl: '/assets/mau_kemana_si/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD100000ORG80000',
          userId: 'USR80000',
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
          files: [
            {
              _id: 'PRDF100000ORG80000',
              refId: 'PRD100000ORG80000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI10000ORG80000',
                  fileId: 'PRDF100000ORG80000',
                  imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD200000ORG80000',
          userId: 'USR80000',
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
          files: [
            {
              _id: 'PRDF200000ORG80000',
              refId: 'PRD200000ORG80000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI20000ORG80000',
                  fileId: 'PRDF200000ORG80000',
                  imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
        {
          _id: 'PRD300000ORG80000',
          userId: 'USR80000',
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
          files: [
            {
              _id: 'PRDF300000ORG80000',
              refId: 'PRD100000ORG80000',
              refType: 'Portfolio',
              images: [
                {
                  _id: 'PRDI30000ORG80000',
                  fileId: 'PRDF300000ORG80000',
                  imgUrl: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
                },
              ],
            },
          ],
        },
      ],
    },
  });
};
