import createIndex from '../../../modules/server/createIndex';
import Trxs from '../Trx';

createIndex(Trxs, { owner: 1 });
