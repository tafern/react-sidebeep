import gql from 'graphql-tag';

import UserTypes from '../../api/Users/types';
import UserQueries from '../../api/Users/queries';
import UserMutations from '../../api/Users/mutations';

import UserSettingsTypes from '../../api/UserSettings/types';
import UserSettingsQueries from '../../api/UserSettings/queries';
import UserSettingsMutations from '../../api/UserSettings/mutations';

import DocumentTypes from '../../api/Documents/types';
import DocumentQueries from '../../api/Documents/queries';
import DocumentMutations from '../../api/Documents/mutations';

import CommentTypes from '../../api/Comments/types';
import CommentQueries from '../../api/Comments/queries';
import CommentMutations from '../../api/Comments/mutations';
import CommentSubscriptions from '../../api/Comments/subscriptions';

// mulai customization

import GeneralTypes from '../../api/general_types';

import ProductTypes from '../../api/Product/types';
import ProductQueries from '../../api/Product/queries';
import ProductMutations from '../../api/Product/mutations';

import ReviewTypes from '../../api/Review/types';
import ReviewQueries from '../../api/Review/queries';
import ReviewMutations from '../../api/Review/mutations';
import ReviewSubscriptions from '../../api/Review/subscriptions';

import OAuthQueries from '../../api/OAuth/queries';

import OrgTypes from '../../api/Org/types';
import OrgQueries from '../../api/Org/queries';
import OrgMutations from '../../api/Org/mutations';

import FileTypes from '../../api/File/types';
import FileQueries from '../../api/File/queries';
import FileMutations from '../../api/File/mutations';

import LocationTypes from '../../api/Location/types';
import LocationQueries from '../../api/Location/queries';
import LocationMutations from '../../api/Location/mutations';

import HeadlineTypes from '../../api/Headline/types';
import HeadlineQueries from '../../api/Headline/queries';
import HeadlineMutations from '../../api/Headline/mutations';

import TagTypes from '../../api/Tag/types';
import TagQueries from '../../api/Tag/queries';
import TagMutations from '../../api/Tag/mutations';

import TrxTypes from '../../api/Trx/types';
import TrxQueries from '../../api/Trx/queries';
import TrxMutations from '../../api/Trx/mutations';

import TrxItemTypes from '../../api/TrxItem/types';
import TrxItemQueries from '../../api/TrxItem/queries';
import TrxItemMutations from '../../api/TrxItem/mutations';

import '../../api/Documents/server/indexes';
import '../../api/Product/server/indexes';
import '../../api/Org/server/indexes';
import '../../api/File/server/indexes';
import '../../api/Location/server/indexes';
import '../../api/Headline/server/indexes';
import '../../api/Tag/server/indexes';
import '../../api/Trx/server/indexes';
import '../../api/TrxItem/server/indexes';
import '../../api/webhooks';

const schema = {
  typeDefs: gql`
    ${UserTypes}
    ${DocumentTypes}
    ${CommentTypes}
    ${UserSettingsTypes}

    # mulai customization
    ${GeneralTypes}
    ${ProductTypes}
    ${ReviewTypes}
    ${OrgTypes}
    ${FileTypes}
    ${LocationTypes}
    ${HeadlineTypes}
    ${TagTypes}
    ${TrxTypes}
    ${TrxItemTypes}

    type Query {
      documents: [Document]
      document(_id: String): Document
      user(_id: String): User
      buyer(_id: String): User
      seller(_id: String): User
      users(currentPage: Int, perPage: Int, search: String): Users
      userSettings: [UserSetting]
      exportUserData: UserDataExport
      oAuthServices(services: [String]): [String]
      orgProduct: [Product]
      products: [Product]
      product(_id: String): Product
      productTrxItem(_id: String): Product
      orgs: [Org]
      orgUser(_id: String): Org
      org(_id: String): Org
      orgFiles: [File]
      headlineFiles: [File]
      productFiles: [File]
      tagFiles: [File]
      userFiles: [File]
      file(_id: String): File
      orgLocations: [Location]
      location(_id: String): Location
      headlines: [Headline]
      headline(_id: String): Headline
      tags: [Tag]
      tag(_id: String): Tag
      trxs: [Trx]
      trx(_id: String, buyer: String): Trx
      trxItems: [TrxItem]
      trxItem(_id: String): TrxItem
    }

    type Mutation {
      addDocument(title: String, body: String): Document
      updateDocument(_id: String!, title: String, body: String, isPublic: Boolean): Document
      removeDocument(_id: String!): Document
      addComment(documentId: String!, comment: String!): Comment
      removeComment(commentId: String!): Comment
      updateUser(user: UserInput): User
      removeUser(_id: String): User
      addUserSetting(setting: UserSettingInput): UserSetting
      updateUserSetting(setting: UserSettingInput): UserSetting
      removeUserSetting(_id: String!): UserSetting
      sendVerificationEmail: User
      sendWelcomeEmail: User
      addProduct(name: String, description: String): Product
      updateProduct(_id: String!, name: String, description: String, isPublic: Boolean): Product
      removeProduct(_id: String!): Product
      addReview(productId: String!, review: String!): Review
      removeReview(reviewId: String!): Review
      addOrg(name: String, description: String): Org
      updateOrg(_id: String!, name: String, description: String): Org
      removeOrg(_id: String!): Org
      addFile(refId: String, fileUrl: String): File
      updateFile(_id: String!, fileUrl: String): File
      removeFile(_id: String!): File
      addLocation(address: String, postcode: String): Location
      updateLocation(_id: String!, address: String, postcode: String): Location
      removeLocation(_id: String!): Location
      addHeadline(name: String, description: String): Headline
      updateHeadline(_id: String!, name: String, description: String): Headline
      removeHeadline(_id: String!): Headline
      addTag(name: String, description: String): Tag
      updateTag(_id: String!, name: String, description: String): Tag
      removeTag(_id: String!): Tag
      addTrx(buyer: String!, seller: String!, subTotal: String, total: String): Trx
      updateTrx(_id: String!, buyer: String, seller: String, subTotal: String, total: String): Trx
      removeTrx(_id: String!): Trx
      addTrxItem(trxId: String, buyer: String!, productId: String!, qty: String!): TrxItem
      updateTrxItem(id: String!, qty: String!): TrxItem
      removeTrxItem(id: String!): TrxItem
    }

    type Subscription {
      commentAdded(documentId: String!): Comment
      reviewAdded(productId: String!): Review
    }
  `,
  resolvers: {
    Query: {
      ...DocumentQueries,
      ...UserQueries,
      ...UserSettingsQueries,
      ...OAuthQueries,
      ...ProductQueries,
      ...OrgQueries,
      ...FileQueries,
      ...LocationQueries,
      ...HeadlineQueries,
      ...TagQueries,
      ...TrxQueries,
      ...TrxItemQueries,
    },
    Mutation: {
      ...DocumentMutations,
      ...CommentMutations,
      ...UserMutations,
      ...UserSettingsMutations,
      ...ProductMutations,
      ...ReviewMutations,
      ...OrgMutations,
      ...FileMutations,
      ...LocationMutations,
      ...HeadlineMutations,
      ...TagMutations,
      ...TrxMutations,
      ...TrxItemMutations,
    },
    Subscription: {
      ...CommentSubscriptions,
      ...ReviewSubscriptions,
    },
    Document: {
      comments: CommentQueries.comments,
    },
    Comment: {
      user: UserQueries.user,
    },
    Org: {
      products: ProductQueries.orgProduct,
      locations: LocationQueries.orgLocations,
      members: UserQueries.users,
      files: FileQueries.orgFiles,
    },
    Product: {
      reviews: ReviewQueries.reviews,
      files: FileQueries.productFiles,
    },
    Review: {
      user: UserQueries.user,
    },
    Headline: {
      files: FileQueries.headlineFiles,
    },
    Tag: {
      files: FileQueries.tagFiles,
    },
    User: {
      files: FileQueries.userFiles,
      org: OrgQueries.org,
    },
    Trx: {
      trxItems: TrxItemQueries.trxItems,
      buyer: UserQueries.buyer,
      seller: UserQueries.seller,
    },
    TrxItem: {
      trx: TrxQueries.trx,
      product: ProductQueries.product,
    },
  },
};

export default schema;
