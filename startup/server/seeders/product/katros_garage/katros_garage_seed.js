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

export const katrosGarageDisplayPictureFileSeed = (userId) => {
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
              imageSeed(userId, '/assets/katros_garage/logo_vendor.jpeg', fileId);
            },
          };
        },
      },
    },
  });
};

export const katrosGarageProductCoverImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDICOVER10000ORG30000',
          fileId: 'PRDFCOVER100000ORG30000',
          imgUrl: '/assets/katros_garage/_products/cover_product_1.jpeg',
        },
        {
          _id: 'PRDICOVER20000ORG30000',
          fileId: 'PRDFCOVER200000ORG30000',
          imgUrl: '/assets/katros_garage/_products/cover_product_2.jpeg',
        },
        {
          _id: 'PRDICOVER30000ORG30000',
          fileId: 'PRDFCOVER300000ORG30000',
          imgUrl: '/assets/katros_garage/_products/cover_product_3.jpeg',
        },
      ],
    },
  });
};

export const katrosGarageProductCoverFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDFCOVER100000ORG30000',
          refId: 'PRD100000ORG30000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER200000ORG30000',
          refId: 'PRD200000ORG30000',
          refType: 'ProductCover',
        },
        {
          _id: 'PRDFCOVER300000ORG30000',
          refId: 'PRD300000ORG30000',
          refType: 'ProductCover',
        },
      ],
    },
  });
};

export const katrosGarageProductPortfolioImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDI10000ORG30000',
          fileId: 'PRDF100000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          _id: 'PRDI20000ORG30000',
          fileId: 'PRDF200000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_2.jpeg',
        },
        {
          _id: 'PRDI30000ORG30000',
          fileId: 'PRDF300000ORG30000',
          imgUrl: '/assets/katros_garage/_portfolio/portfolio_3.jpeg',
        },
      ],
    },
  });
};

export const katrosGarageProductPortfolioFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRDF100000ORG30000',
          refId: 'PRD100000ORG30000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF200000ORG30000',
          refId: 'PRD200000ORG30000',
          refType: 'Portfolio',
        },
        {
          _id: 'PRDF300000ORG30000',
          refId: 'PRD300000ORG30000',
          refType: 'Portfolio',
        },
      ],
    },
  });
};

export const katrosGarageProductsSeed = (userId) => {
  seeder(Products, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG30000',
          userId,
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
        },
        {
          _id: 'PRD200000ORG30000',
          userId,
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
        },
        {
          _id: 'PRD300000ORG30000',
          userId,
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
        },
      ],
    },
  });
};
