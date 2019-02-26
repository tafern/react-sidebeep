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
          url: '/assets/shoes_and_care/logo_vendor.jpeg',
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
          url: '/assets/shoes_and_care/logo_vendor.jpg',
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
            _id: 'PRD100000ORG80000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/shoes_and_care/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG80000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/shoes_and_care/_portfolio/portfolio_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG80000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/shoes_and_care/_portfolio/portfolio_3.jpeg',
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
            _id: 'PRD100000ORG80000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/shoes_and_care/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG80000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/shoes_and_care/_products/cover_product_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG80000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/shoes_and_care/_products/cover_product_3.jpeg',
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
            fullname: 'Shoes And Care',
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

export const orgProductSeed = (orgId) => {
  seeder(Product, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'PRD100000ORG80000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Shoes And Care',
          },
          name: 'Deep Cleaning Shoes',
          description:
            'Deep cleaning, ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA. Pembayaran Non Cash.',
          price: '85000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG80000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Shoes And Care',
          },
          name: 'Bag Care Medium',
          description:
            'Untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
          price: '125000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD300000ORG80000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Shoes And Care',
          },
          name: 'Snapback Cleaning Hard',
          description:
            'Hanya untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
          price: '130000',
          viewCount: '22',
          orderCount: '13',
        },
      ],
    },
  });
};

export const shoesAndCareSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG80000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG80000',
                type: 'Org',
                fullname: 'Shoes And Care',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/shoes_and_care/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG80000',
                type: 'Org',
                fullname: 'Shoes And Care',
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
              email: 'shoes_and_care@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Shoes And',
                  last: 'Care',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG80000',
              owner: {
                _id: 'ORG80000',
                type: 'Org',
                fullname: 'Shoes And Care',
              },
              name: 'Deep Cleaning Shoes',
              description:
                'Deep cleaning, ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA. Pembayaran Non Cash.',
              price: '85000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG80000',
              owner: {
                _id: 'ORG80000',
                type: 'Org',
                fullname: 'Shoes And Care',
              },
              name: 'Bag Care Medium',
              description:
                'Untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
              price: '125000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD300000ORG80000',
              owner: {
                _id: 'ORG80000',
                type: 'Org',
                fullname: 'Shoes And Care',
              },
              name: 'Snapback Cleaning Hard',
              description:
                'Hanya untuk pembayaran NON CASH.tidak ada batas maksimal transaksi. ESTIMASI WAKTU CUCI 3-5 HARI. FREE PICK UP HANYA DAERAH JAKARTA.',
              price: '130000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG80000',
            type: 'Org',
            fullname: 'Shoes And Care',
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

export default shoesAndCareSeed;
