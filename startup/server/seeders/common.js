import seeder from '@cleverbeagle/seeder/index.min';
import Images from '../../../api/Images/Images';

const imageSeed = (userId, date, idOfFile) => {
  seeder(Images, {
    seedIfExistingData: true,
    environments: ['development', 'staging'],
    data: {
      dynamic: {
        count: 1,
        seed() {
          return {
            fileId: idOfFile,
            imgUrl:
              'https://api.sidebeep.com/files/images/20296705-d354-424a-99d3-b259da56e833/c_fit,',
            createdAt: date,
          };
        },
      },
    },
  });
};

export default imageSeed;
