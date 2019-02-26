import seeder from '@cleverbeagle/seeder/index.min';
import Org from '../../../api/Org/Org';
import File from '../../../api/File/File';
import Product from '../../../api/Product/Product';
import Location from '../../../api/Location/Location';

const userCoverSeed = (userId) => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: userId,
            type: 'User',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/katros_garage/logo_vendor.jpeg',
        },
      ],
    },
  });
};

export const orgImageCoverSeed = (orgId) => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: orgId,
            type: 'Org',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/katros_garage/logo_vendor.jpg',
        },
      ],
    },
  });
};

export const orgProductImagePortfolioSeed = () => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: 'PRD100000ORG30000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/katros_garage/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG30000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/katros_garage/_portfolio/portfolio_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG30000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/katros_garage/_portfolio/portfolio_3.jpeg',
        },
      ],
    },
  });
};

export const orgProductImageCoverSeed = () => {
  seeder(File, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          refs: {
            _id: 'PRD100000ORG30000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/katros_garage/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG30000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/katros_garage/_products/cover_product_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG30000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/katros_garage/_products/cover_product_3.jpeg',
        },
      ],
    },
  });
};

export const orgProductSeed = (orgId) => {
  seeder(Product, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG30000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Katros Garage',
          },
          name: 'Custom Motor Kawasaki W175 Stage 1',
          description:
            'Kustom motor khusus untuk Kawasaki W175 step 1 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting). - Stoplamp & Breket - Jok (by request) - Katros Muffler (Full System)',
          price: '4350000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG30000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Katros Garage',
          },
          name: 'Custom Motor Kawasaki W175 Stage 2',
          description:
            'Jasa Kustom Motor Kawasaki W175 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by request) - Katros Muffler (full sistem) - Skidplate & Breket - Cover Carvurator & Breket - Ban (lokal) - Stoplamp & Breket.',
          price: '6350000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD300000ORG30000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Katros Garage',
          },
          name: 'Custom Motor Kawasaki W175 Stage 3',
          description:
            'Jasa Kustom Motor Kawasaki W175 stage 3 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by reguest) - Katros Muffler (Full Sistem) - Skidplate & Breket - Cover Carburator - Ban (lokal) - Lampu depan 5.75 inch & Breket - Lampu Sein & Breket - Lampu Stop & Breket - Spidometer & Breket - Handgrip - Setang - Spion - Sok Breker Belakang 340mm.',
          price: '9000000',
          viewCount: '22',
          orderCount: '13',
        },
      ],
    },
  });
};

const orgLocationSeed = (orgId) => {
  seeder(Location, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Katros Garage',
          },
          address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          latitude: '-6.135558',
          longitude: '106.8044564',
          type: 'Office',
          status: 'Active',
        },
      ],
    },
  });
};

export const katrosGarageSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG30000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG30000',
                type: 'Org',
                fullname: 'Katros Garage',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/katros_garage/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG30000',
                type: 'Org',
                fullname: 'Katros Garage',
              },
              address: 'Jl MH Thamrin 9 Menara Cakrawala Lt 5,Kebon Sirih',
              city: 'Jakarta Pusat',
              province: 'DKI Jakarta',
              latitude: '-6.135558',
              longitude: '106.8044564',
            },
          ],
          members: [
            {
              _id: userId,
              email: 'katros_garage@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Katros',
                  last: 'Garage',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG30000',
              owner: {
                _id: 'ORG30000',
                type: 'Org',
                fullname: 'Katros Garage',
              },
              name: 'Custom Motor Kawasaki W175 Stage 1',
              description:
                'Kustom motor khusus untuk Kawasaki W175 step 1 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting). - Stoplamp & Breket - Jok (by request) - Katros Muffler (Full System)',
              price: '4350000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG30000',
              owner: {
                _id: 'ORG30000',
                type: 'Org',
                fullname: 'Katros Garage',
              },
              name: 'Custom Motor Kawasaki W175 Stage 2',
              description:
                'Jasa Kustom Motor Kawasaki W175 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by request) - Katros Muffler (full sistem) - Skidplate & Breket - Cover Carvurator & Breket - Ban (lokal) - Stoplamp & Breket.',
              price: '6350000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD300000ORG30000',
              owner: {
                _id: 'ORG30000',
                type: 'Org',
                fullname: 'Katros Garage',
              },
              name: 'Custom Motor Kawasaki W175 Stage 3',
              description:
                'Jasa Kustom Motor Kawasaki W175 stage 3 dari The Katros Garage meliputi pengerjaan : - Spatbor depan & belakang (free painting) - Jok (by reguest) - Katros Muffler (Full Sistem) - Skidplate & Breket - Cover Carburator - Ban (lokal) - Lampu depan 5.75 inch & Breket - Lampu Sein & Breket - Lampu Stop & Breket - Spidometer & Breket - Handgrip - Setang - Spion - Sok Breker Belakang 340mm.',
              price: '9000000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG30000',
            type: 'Org',
            fullname: 'Katros Garage',
          },
          type: 'Channel',
          status: 'Active',
          dependentData(orgId) {
            userCoverSeed(orgId);
            orgImageCoverSeed(orgId);
            orgProductSeed(orgId);
            orgProductImageCoverSeed();
            orgProductImagePortfolioSeed();
            orgLocationSeed(orgId);
          },
        },
      ],
    },
  });
};

export default katrosGarageSeed;
