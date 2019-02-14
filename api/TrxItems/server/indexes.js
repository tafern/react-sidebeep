import createIndex from '../../../modules/server/createIndex';
import TrxItems from '../TrxItems';

createIndex(TrxItems, { owner: 1 });
