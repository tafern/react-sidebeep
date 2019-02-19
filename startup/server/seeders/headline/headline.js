import seeder from '@cleverbeagle/seeder/index.min';
import Images from '../../../../api/Images/Images';
import Files from '../../../../api/Files/Files';
import Headlines from '../../../../api/Headlines/Headlines';

export const headlineImageSeed = () => {
  seeder(Images, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'HIMAIN10000',
          fileId: 'MAINF10000',
          imgUrl: '/assets/headline/main/main_1.jpg',
        },
        {
          _id: 'HIMAIN20000',
          fileId: 'MAINF10000',
          imgUrl: '/assets/headline/main/main_2.jpg',
        },
        {
          _id: 'HIMAIN30000',
          fileId: 'MAINF10000',
          imgUrl: '/assets/headline/main/main_3.jpg',
        },
        {
          _id: 'HIMAIN40000',
          fileId: 'MAINF10000',
          imgUrl: '/assets/headline/main/main_4.jpg',
        },
        {
          _id: 'HIMAIN50000',
          fileId: 'MAINF10000',
          imgUrl: '/assets/headline/main/main_5.jpg',
        },
        {
          _id: 'HINEWS10000',
          fileId: 'NEWSF10000',
          imgUrl: '/assets/headline/news/news_1.jpg',
        },
        {
          _id: 'HINEWS20000',
          fileId: 'NEWSF10000',
          imgUrl: '/assets/headline/news/news_2.jpg',
        },
        {
          _id: 'HIPROMO10000',
          fileId: 'PROMOF10000',
          imgUrl: '/assets/headline/promo/promo_1.jpg',
        },
        {
          _id: 'HIPROMO20000',
          fileId: 'PROMOF10000',
          imgUrl: '/assets/headline/promo/promo_2.jpg',
        },
      ],
    },
  });
};
export const headlineFileSeed = () => {
  seeder(Files, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'MAINF10000',
          refId: 'HEADLINE10000',
          refType: 'Main',
          images: [
            {
              _id: 'HIMAIN10000',
              fileId: 'MAINF10000',
              imgUrl: '/assets/headline/main/main_1.jpg',
            },
            {
              _id: 'HIMAIN20000',
              fileId: 'MAINF10000',
              imgUrl: '/assets/headline/main/main_2.jpg',
            },
            {
              _id: 'HIMAIN30000',
              fileId: 'MAINF10000',
              imgUrl: '/assets/headline/main/main_3.jpg',
            },
            {
              _id: 'HIMAIN40000',
              fileId: 'MAINF10000',
              imgUrl: '/assets/headline/main/main_4.jpg',
            },
            {
              _id: 'HIMAIN50000',
              fileId: 'MAINF10000',
              imgUrl: '/assets/headline/main/main_5.jpg',
            },
          ],
        },
        {
          _id: 'NEWSF10000',
          refId: 'HEADLINE20000',
          refType: 'News',
          images: [
            {
              _id: 'HINEWS10000',
              fileId: 'NEWSF10000',
              imgUrl: '/assets/headline/news/news_1.jpg',
            },
            {
              _id: 'HINEWS20000',
              fileId: 'NEWSF10000',
              imgUrl: '/assets/headline/news/news_2.jpg',
            },
          ],
        },
        {
          _id: 'PROMOF10000',
          refId: 'HEADLINE30000',
          refType: 'Promo',
          images: [
            {
              _id: 'HIPROMO10000',
              fileId: 'PROMOF10000',
              imgUrl: '/assets/headline/promo/promo_1.jpg',
            },
            {
              _id: 'HIPROMO20000',
              fileId: 'PROMOF10000',
              imgUrl: '/assets/headline/promo/promo_2.jpg',
            },
          ],
        },
      ],
    },
  });
};
export const headlinesSeed = () => {
  seeder(Headlines, {
    seedIfExistingData: false,
    environments: ['development', 'staging'],
    data: {
      static: [
        {
          _id: 'HEADLINE10000',
          name: 'Main Headline',
          description: 'This Is About Main Headline',
          files: [
            {
              _id: 'MAINF10000',
              refId: 'HEADLINE10000',
              refType: 'Main',
              images: [
                {
                  _id: 'HIMAIN10000',
                  fileId: 'MAINF10000',
                  imgUrl: '/assets/headline/main/main_1.jpg',
                },
                {
                  _id: 'HIMAIN20000',
                  fileId: 'MAINF10000',
                  imgUrl: '/assets/headline/main/main_2.jpg',
                },
                {
                  _id: 'HIMAIN30000',
                  fileId: 'MAINF10000',
                  imgUrl: '/assets/headline/main/main_3.jpg',
                },
                {
                  _id: 'HIMAIN40000',
                  fileId: 'MAINF10000',
                  imgUrl: '/assets/headline/main/main_4.jpg',
                },
                {
                  _id: 'HIMAIN50000',
                  fileId: 'MAINF10000',
                  imgUrl: '/assets/headline/main/main_5.jpg',
                },
              ],
            },
          ],
        },
        {
          _id: 'HEADLINE20000',
          name: 'News Headline',
          description: 'This Is About Main News',
          files: [
            {
              _id: 'NEWSF10000',
              refId: 'HEADLINE20000',
              refType: 'News',
              images: [
                {
                  _id: 'HINEWS10000',
                  fileId: 'NEWSF10000',
                  imgUrl: '/assets/headline/news/news_1.jpg',
                },
                {
                  _id: 'HINEWS20000',
                  fileId: 'NEWSF10000',
                  imgUrl: '/assets/headline/news/news_2.jpg',
                },
              ],
            },
          ],
        },
        {
          _id: 'HEADLINE30000',
          name: 'Promo Headline',
          description: 'This Is About Promo Headline',
          files: [
            {
              _id: 'PROMOF10000',
              refId: 'HEADLINE30000',
              refType: 'Promo',
              images: [
                {
                  _id: 'HIPROMO10000',
                  fileId: 'PROMOF10000',
                  imgUrl: '/assets/headline/promo/promo_1.jpg',
                },
                {
                  _id: 'HIPROMO20000',
                  fileId: 'PROMOF10000',
                  imgUrl: '/assets/headline/promo/promo_2.jpg',
                },
              ],
            },
          ],
        },
      ],
    },
  });
};
