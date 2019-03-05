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
          url: '/assets/cay_cay/logo_vendor.jpeg',
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
          url: '/assets/cay_cay/logo_vendor.jpg',
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
            _id: 'PRD100000ORG10000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG10000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_portfolio/portfolio_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG10000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_portfolio/portfolio_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG10000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_portfolio/portfolio_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG10000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_portfolio/portfolio_5.jpeg',
        },
        {
          refs: {
            _id: 'PRD600000ORG10000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_portfolio/portfolio_6.jpeg',
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
            _id: 'PRD100000ORG10000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG10000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_products/cover_product_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG10000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_products/cover_product_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG10000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_products/cover_product_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG10000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_products/cover_product_5.jpeg',
        },
        {
          refs: {
            _id: 'PRD600000ORG10000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/cay_cay/_products/cover_product_6.jpeg',
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
            url: '/assets/cay_cay/logo_vendor.jpeg',
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
          _id: 'PRD100000ORG10000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
          },
          name: 'Promo #Berimlek 3D Haircut By Anash',
          description:
            'Promo Rp 325.000,- disc.50% --> Rp 162.500,-. Haircut dengan teknik 3D. Sudah termasuk cuci + blow',
          price: '162500',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG10000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
          },
          name: 'Haircut By Alex',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '325000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD300000ORG10000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
          },
          name: 'Haircut By Yusri',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '325000',
          viewCount: '52',
          orderCount: '23',
        },
        {
          _id: 'PRD400000ORG10000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
          },
          name: 'Haircut By Poniman',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '230000',
          viewCount: '52',
          orderCount: '23',
        },
        {
          _id: 'PRD500000ORG10000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
          },
          name: 'Haircut By Budi',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '230000',
          viewCount: '12',
          orderCount: '13',
        },
        {
          _id: 'PRD600000ORG10000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
          },
          name: 'Haircut By Susi',
          description: 'Sudah Termasuk Cuci + Blow',
          price: '230000',
          viewCount: '12',
          orderCount: '13',
        },
      ],
    },
  });
};

export const cayCaySeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG10000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/cay_cay/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
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
              email: 'cay_cay@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Cay',
                  last: 'Cay',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG10000',
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              name: 'Promo #Berimlek 3D Haircut By Anash',
              description:
                'Promo Rp 325.000,- disc.50% --> Rp 162.500,-. Haircut dengan teknik 3D. Sudah termasuk cuci + blow',
              price: '162500',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG10000',
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              name: 'Haircut By Alex',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '325000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD300000ORG10000',
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              name: 'Haircut By Yusri',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '325000',
              viewCount: '52',
              orderCount: '23',
            },
            {
              _id: 'PRD400000ORG10000',
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              name: 'Haircut By Poniman',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '230000',
              viewCount: '52',
              orderCount: '23',
            },
            {
              _id: 'PRD500000ORG10000',
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              name: 'Haircut By Budi',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '230000',
              viewCount: '12',
              orderCount: '13',
            },
            {
              _id: 'PRD600000ORG10000',
              owner: {
                _id: 'ORG10000',
                type: 'Org',
                fullname: 'Cay Cay',
                url: '/assets/cay_cay/logo_vendor.jpeg',
              },
              name: 'Haircut By Susi',
              description: 'Sudah Termasuk Cuci + Blow',
              price: '230000',
              viewCount: '12',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG10000',
            type: 'Org',
            fullname: 'Cay Cay',
            url: '/assets/cay_cay/logo_vendor.jpeg',
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

export default cayCaySeed;
