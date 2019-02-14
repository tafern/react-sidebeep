import createIndex from '../../../modules/server/createIndex';
import Trxs from '../Trxs';

createIndex(Trxs, { owner: 1 });
