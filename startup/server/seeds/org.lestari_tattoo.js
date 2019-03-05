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
          url: '/assets/lestari_tattoo/logo_vendor.jpeg',
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
          url: '/assets/lestari_tattoo/logo_vendor.jpg',
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
            _id: 'PRD100000ORG60000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/lestari_tattoo/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG60000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/lestari_tattoo/_portfolio/portfolio_2.jpeg',
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
            _id: 'PRD100000ORG60000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/lestari_tattoo/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG60000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/lestari_tattoo/_products/cover_product_2.jpeg',
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
          _id: 'PRD100000ORG60000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Lestari Tattoo',
            url: '/assets/lestari_tattoo/logo_vendor.jpeg',
          },
          name: 'Permanent Tattoo',
          description:
            'Jasa tattoo permanen min. price Rp 500.000 (uk 5x5cm) Harga persenti meter persegi Rp 15.000.',
          price: '500000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG60000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Lestari Tattoo',
            url: '/assets/lestari_tattoo/logo_vendor.jpeg',
          },
          name: 'Permanent Tattoo 10x10',
          description: 'Jasa tattoo permanent standar untuk ukuran 10x10 CM',
          price: '1500000',
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
            fullname: 'Cay Cay',
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

export const lestariTattooSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG60000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG60000',
                type: 'Org',
                fullname: 'Lestari Tattoo',
                url: '/assets/lestari_tattoo/logo_vendor.jpeg',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/lestari_tattoo/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG60000',
                type: 'Org',
                fullname: 'Lestari Tattoo',
                url: '/assets/lestari_tattoo/logo_vendor.jpeg',
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
              email: 'lestari_tattoo@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Lestari',
                  last: 'Tattoo',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG60000',
              owner: {
                _id: 'ORG60000',
                type: 'Org',
                fullname: 'Lestari Tattoo',
                url: '/assets/lestari_tattoo/logo_vendor.jpeg',
              },
              name: 'Permanent Tattoo',
              description:
                'Jasa tattoo permanen min. price Rp 500.000 (uk 5x5cm) Harga persenti meter persegi Rp 15.000.',
              price: '500000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG60000',
              owner: {
                _id: 'ORG60000',
                type: 'Org',
                fullname: 'Lestari Tattoo',
                url: '/assets/lestari_tattoo/logo_vendor.jpeg',
              },
              name: 'Permanent Tattoo 10x10',
              description: 'Jasa tattoo permanent standar untuk ukuran 10x10 CM',
              price: '1500000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG60000',
            type: 'Org',
            fullname: 'Lestari Tattoo',
            url: '/assets/lestari_tattoo/logo_vendor.jpeg',
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

export default lestariTattooSeed;
