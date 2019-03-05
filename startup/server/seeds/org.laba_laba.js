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
          url: '/assets/laba_laba/logo_vendor.jpeg',
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
          url: '/assets/laba_laba/logo_vendor.jpg',
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
            _id: 'PRD100000ORG40000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG40000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_portfolio/portfolio_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG40000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_portfolio/portfolio_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG40000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_portfolio/portfolio_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG40000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_portfolio/portfolio_5.jpeg',
        },
        {
          refs: {
            _id: 'PRD600000ORG40000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_portfolio/portfolio_6.jpeg',
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
            _id: 'PRD100000ORG40000',
            type: 'ProductCover',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG40000',
            type: 'ProductCover',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_products/cover_product_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG40000',
            type: 'ProductCover',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_products/cover_product_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG40000',
            type: 'ProductCover',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_products/cover_product_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG40000',
            type: 'ProductCover',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_products/cover_product_5.jpeg',
        },
        {
          refs: {
            _id: 'PRD600000ORG40000',
            type: 'ProductCover',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/laba_laba/_products/cover_product_6.jpeg',
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
          _id: 'PRD100000ORG40000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
          },
          name: 'Wheel Missing',
          description: 'Estimate Price : Rp 125.000 - Rp 250.000',
          price: '125000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG40000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
          },
          name: "Zipper's Head",
          description: 'Estimate Price : Rp 50.000 - Rp 125.000',
          price: '50000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD300000ORG40000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
          },
          name: 'Trolley Missing / Broken',
          description: 'Estimate Price : Rp 150.000 - Rp 300.000.',
          price: '150000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD400000ORG40000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
          },
          name: 'Zipper',
          description:
            'Estimate Price : Rp 200.000 - Rp 500.000 FREE antar jemput barang untuk daerah Jabodetabek.',
          price: '200000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD500000ORG40000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
          },
          name: 'Handle Missing / Broken',
          description: 'Estimate Price : Rp 125.000 - Rp 250.000.',
          price: '125000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD600000ORG40000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
          },
          name: 'Combination Lock',
          description: 'Estimate Price : Rp 100.000 - Rp 150.000.',
          price: '100000',
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
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
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

export const labaLabaSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG40000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/laba_laba/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
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
              email: 'laba_laba@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Laba',
                  last: 'Laba',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG40000',
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              name: 'Wheel Missing',
              description: 'Estimate Price : Rp 125.000 - Rp 250.000',
              price: '125000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG40000',
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              name: "Zipper's Head",
              description: 'Estimate Price : Rp 50.000 - Rp 125.000',
              price: '50000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD300000ORG40000',
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              name: 'Trolley Missing / Broken',
              description: 'Estimate Price : Rp 150.000 - Rp 300.000.',
              price: '150000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD400000ORG40000',
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              name: 'Zipper',
              description:
                'Estimate Price : Rp 200.000 - Rp 500.000 FREE antar jemput barang untuk daerah Jabodetabek.',
              price: '200000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD500000ORG40000',
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              name: 'Handle Missing / Broken',
              description: 'Estimate Price : Rp 125.000 - Rp 250.000.',
              price: '125000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD600000ORG40000',
              owner: {
                _id: 'ORG40000',
                type: 'Org',
                fullname: 'Laba Laba',
                url: '/assets/katros_garage/logo_vendor.jpeg',
              },
              name: 'Combination Lock',
              description: 'Estimate Price : Rp 100.000 - Rp 150.000.',
              price: '100000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG40000',
            type: 'Org',
            fullname: 'Laba Laba',
            url: '/assets/katros_garage/logo_vendor.jpeg',
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

export default labaLabaSeed;
