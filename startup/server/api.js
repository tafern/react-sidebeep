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

import ProductTypes from '../../api/Products/types';
import ProductQueries from '../../api/Products/queries';
import ProductMutations from '../../api/Products/mutations';

import ProductReviewTypes from '../../api/ProductReviews/types';
import ProductReviewQueries from '../../api/ProductReviews/queries';
import ProductReviewMutations from '../../api/ProductReviews/mutations';
import ProductReviewSubscriptions from '../../api/ProductReviews/subscriptions';

import OAuthQueries from '../../api/OAuth/queries';

import OrgTypes from '../../api/Orgs/types';
import OrgQueries from '../../api/Orgs/queries';
import OrgMutations from '../../api/Orgs/mutations';

import FileTypes from '../../api/Files/types';
import FileQueries from '../../api/Files/queries';
import FileMutations from '../../api/Files/mutations';

import ImageTypes from '../../api/Images/types';
import ImageQueries from '../../api/Images/queries';
import ImageMutations from '../../api/Images/mutations';

import LocationTypes from '../../api/Locations/types';
import LocationQueries from '../../api/Locations/queries';
import LocationMutations from '../../api/Locations/mutations';

import '../../api/Documents/server/indexes';
import '../../api/Products/server/indexes';
import '../../api/Orgs/server/indexes';
import '../../api/Files/server/indexes';
import '../../api/Images/server/indexes';
import '../../api/Locations/server/indexes';
import '../../api/webhooks';

const schema = {
  typeDefs: gql`
    ${UserTypes}
    ${DocumentTypes}
    ${CommentTypes}
    ${UserSettingsTypes}
    ${ProductTypes}
    ${ProductReviewTypes}
    ${OrgTypes}
    ${FileTypes}
    ${ImageTypes}
    ${LocationTypes}

    type Query {
      documents: [Document]
      document(_id: String): Document
      user(_id: String): User
      users(currentPage: Int, perPage: Int, search: String): Users
      userSettings: [UserSetting]
      exportUserData: UserDataExport
      oAuthServices(services: [String]): [String]
      products: [Product]
      product(_id: String): Product
      orgs: [Org]
      org(_id: String): Org
      files: [File]
      file(_id: String): File
      images: [Image]
      image(_id: String): Image
      locations: [Location]
      location(_id: String): Location
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
      addProductReview(productId: String!, productReview: String!): ProductReview
      removeProductReview(productReviewId: String!): ProductReview
      addOrg(name: String, description: String): Org
      updateOrg(_id: String!, name: String, description: String): Org
      removeOrg(_id: String!): Org
      addFile(refferenceId: String, fileUrl: String): File
      updateFile(_id: String!, fileUrl: String): File
      removeFile(_id: String!): File
      addImage(fileId: String, imgUrl: String): Image
      updateImage(_id: String!, imgUrl: String): Image
      removeImage(_id: String!): Image
      addLocation(address: String, postcode: String): Location
      updateLocation(_id: String!, address: String, postcode: String): Location
      removeLocation(_id: String!): Location
    }

    type Subscription {
      commentAdded(documentId: String!): Comment
      productReviewAdded(productId: String!): ProductReview
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
      ...ImageQueries,
      ...LocationQueries,
    },
    Mutation: {
      ...DocumentMutations,
      ...CommentMutations,
      ...UserMutations,
      ...UserSettingsMutations,
      ...ProductMutations,
      ...ProductReviewMutations,
      ...OrgMutations,
      ...FileMutations,
      ...ImageMutations,
      ...LocationMutations,
    },
    Subscription: {
      ...CommentSubscriptions,
      ...ProductReviewSubscriptions,
    },
    Document: {
      comments: CommentQueries.comments,
    },
    Comment: {
      user: UserQueries.user,
    },
    Org: {
      products: ProductQueries.products,
      files: FileQueries.files,
    },
    Product: {
      productReviews: ProductReviewQueries.productReviews,
      files: FileQueries.files,
    },
    ProductReview: {
      user: UserQueries.user,
    },
    File: {
      images: ImageQueries.images,
    },
  },
};

export default schema;
