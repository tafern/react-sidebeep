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
          url: '/assets/les_elite/logo_vendor.jpeg',
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
          url: '/assets/les_elite/logo_vendor.jpg',
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
            _id: 'PRD100000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_5.jpeg',
        },
        {
          refs: {
            _id: 'PRD600000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_6.jpeg',
        },
        {
          refs: {
            _id: 'PRD700000ORG50000',
            type: 'Product',
          },
          type: 'Image_Portfolio_Detail',
          status: 'Active',
          url: '/assets/les_elite/_portfolio/portfolio_7.jpeg',
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
            _id: 'PRD100000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_1.jpeg',
        },
        {
          refs: {
            _id: 'PRD200000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_2.jpeg',
        },
        {
          refs: {
            _id: 'PRD300000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_3.jpeg',
        },
        {
          refs: {
            _id: 'PRD400000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_4.jpeg',
        },
        {
          refs: {
            _id: 'PRD500000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_5.jpeg',
        },
        {
          refs: {
            _id: 'PRD600000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_6.jpeg',
        },
        {
          refs: {
            _id: 'PRD700000ORG50000',
            type: 'Product',
          },
          type: 'Image_Cover_Detail',
          status: 'Active',
          url: '/assets/les_elite/_products/cover_product_7.jpeg',
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
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
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
          _id: 'PRD100000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'Regular',
          description:
            'Perawatan mobil dalam 30 menit termasuk - Carnouba Wax - Semir Ban - Exterior Cleaning - Interior Cleaning - Vacuum.',
          price: '100000',
          viewCount: '12',
          orderCount: '33',
        },
        {
          _id: 'PRD200000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'Promo #Berimlek Ultra Nano',
          description:
            'Harga normal Rp 150.000, disc. 50% --> Rp 75.000. Perawatan Mobil 60-90 menit Termasuk -Semir Ban-Exterior Cleaning-Interior Cleaning-Vacuum-Nano Wax-Trim Dressing-Engine Dressing. BERLAKU UNTUK PEMBAYARAN NON-CASH',
          price: '75000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD300000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'PRO Service',
          description:
            'Perawatan Mobil dalam 2-3 jam termasuk : - Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Trim Dressing -Engine Dressing.',
          price: '250000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD400000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'Premium',
          description:
            'Perawatan Mobil dalam 2-3 jam termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
          price: '350000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD500000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'Glass Water Sport',
          description: 'Perawatan Mobil penanganan Glass Water Spot.',
          price: '150000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD600000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'Body Water Spot',
          description: 'Perawatan mobil untuk Body Water Spot.',
          price: '250000',
          viewCount: '22',
          orderCount: '13',
        },
        {
          _id: 'PRD700000ORG50000',
          owner: {
            _id: orgId,
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
          },
          name: 'Poles / Salon',
          description:
            'Perawatan Mobil dalam 4 jam Termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
          price: '1250000',
          viewCount: '22',
          orderCount: '13',
        },
      ],
    },
  });
};

export const lesEliteSeed = (userId) => {
  seeder(Org, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'ORG50000',
          phones: '081212092303',
          files: [
            {
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              type: 'Image_Cover_Detail',
              status: 'Active',
              url: '/assets/les_elite/logo_vendor.jpg',
            },
          ],
          locations: [
            {
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
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
              email: 'les_elite@sidebeep.com',
              password: 'password',
              profile: {
                name: {
                  first: 'Les',
                  last: 'Elite',
                },
              },
              roles: ['sider'],
            },
          ],
          products: [
            {
              _id: 'PRD100000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'Regular',
              description:
                'Perawatan mobil dalam 30 menit termasuk - Carnouba Wax - Semir Ban - Exterior Cleaning - Interior Cleaning - Vacuum.',
              price: '100000',
              viewCount: '12',
              orderCount: '33',
            },
            {
              _id: 'PRD200000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'Promo #Berimlek Ultra Nano',
              description:
                'Harga normal Rp 150.000, disc. 50% --> Rp 75.000. Perawatan Mobil 60-90 menit Termasuk -Semir Ban-Exterior Cleaning-Interior Cleaning-Vacuum-Nano Wax-Trim Dressing-Engine Dressing. BERLAKU UNTUK PEMBAYARAN NON-CASH',
              price: '75000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD300000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'PRO Service',
              description:
                'Perawatan Mobil dalam 2-3 jam termasuk : - Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Trim Dressing -Engine Dressing.',
              price: '250000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD400000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'Premium',
              description:
                'Perawatan Mobil dalam 2-3 jam termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Nano Wax -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
              price: '350000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD500000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'Glass Water Sport',
              description: 'Perawatan Mobil penanganan Glass Water Spot.',
              price: '150000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD600000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'Body Water Spot',
              description: 'Perawatan mobil untuk Body Water Spot.',
              price: '250000',
              viewCount: '22',
              orderCount: '13',
            },
            {
              _id: 'PRD700000ORG50000',
              owner: {
                _id: 'ORG50000',
                type: 'Org',
                fullname: 'Les Elite',
                url: '/assets/les_elite/logo_vendor.jpeg',
              },
              name: 'Poles / Salon',
              description:
                'Perawatan Mobil dalam 4 jam Termasuk : -Semir Ban -Exterior Cleaning -Interior Cleaning -Vacuum -Glass Spot Removal -Body Spot Removal -Trim Dressing -Engine Dressing.',
              price: '1250000',
              viewCount: '22',
              orderCount: '13',
            },
          ],
          owner: {
            _id: 'ORG50000',
            type: 'Org',
            fullname: 'Les Elite',
            url: '/assets/les_elite/logo_vendor.jpeg',
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

export default lesEliteSeed;
