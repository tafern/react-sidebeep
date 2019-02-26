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
          url: '/assets/kaizen/logo_vendor.jpeg',
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
          url: '/assets/kaizen/logo_vendor.jpg',
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
            _id: 'PRD100000ORG20000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/kaizen/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG20000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/kaizen/_portfolio/portfolio_2.jpeg',
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
            _id: 'PRD100000ORG20000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/kaizen/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG20000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/kaizen/_products/cover_product_2.jpeg',
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
          _id: 'PRD100000ORG20000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Kaizen Spa',
          },
          name: 'Promo Pijat Tradisional 1 (POTONGAN 50K)',
          description:
            'Gunakan kode voucher SIDEBEEPKAIZEN untuk mendapatkan jasa ini dari 130K menjadi hanya 80K !!',
          price: '130000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG20000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Kaizen Spa',
          },
          name: 'Face Accupresure',
          description: 'This is description about Face Accupresure.',
          price: '170000',
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
            fullname: 'Kaizen Spa',
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

export const kaizenSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG20000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG20000',
                type: 'Org',
                fullname: 'Kaizen Spa',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/kaizen/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG20000',
                type: 'Org',
                fullname: 'Kaizen Spa',
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
              email: 'kaizen@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Kaizen',
                  last: 'Spa',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG20000',
              owner: {
                _id: 'ORG20000',
                type: 'Org',
                fullname: 'Kaizen Spa',
              },
              name: 'Promo Pijat Tradisional 1 (POTONGAN 50K)',
              description:
                'Gunakan kode voucher SIDEBEEPKAIZEN untuk mendapatkan jasa ini dari 130K menjadi hanya 80K !!',
              price: '130000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG20000',
              owner: {
                _id: 'ORG20000',
                type: 'Org',
                fullname: 'Kaizen Spa',
              },
              name: 'Face Accupresure',
              description: 'This is description about Face Accupresure.',
              price: '170000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG20000',
            type: 'Org',
            fullname: 'Kaizen Spa',
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

export default kaizenSeed;
