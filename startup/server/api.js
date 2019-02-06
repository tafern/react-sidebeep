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

import ProductCommentTypes from '../../api/ProductComments/types';
import ProductCommentQueries from '../../api/ProductComments/queries';
import ProductCommentMutations from '../../api/ProductComments/mutations';
import ProductCommentSubscriptions from '../../api/ProductComments/subscriptions';

import OAuthQueries from '../../api/OAuth/queries';

import '../../api/Documents/server/indexes';
import '../../api/Products/server/indexes';
import '../../api/webhooks';

const schema = {
  typeDefs: gql`
    ${UserTypes}
    ${DocumentTypes}
    ${CommentTypes}
    ${UserSettingsTypes}
    ${ProductTypes}
    ${ProductCommentTypes}

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
      addProduct(productName: String, productDescription: String): Product
      updateProduct(
        _id: String!
        productName: String
        productDescription: String
        isPublic: Boolean
      ): Product
      removeProduct(_id: String!): Product
      addProductComment(productId: String!, productComment: String!): ProductComment
      removeProductComment(productCommentId: String!): ProductComment
    }

    type Subscription {
      commentAdded(documentId: String!): Comment
      productCommentAdded(productId: String!): ProductComment
    }
  `,
  resolvers: {
    Query: {
      ...DocumentQueries,
      ...UserQueries,
      ...UserSettingsQueries,
      ...OAuthQueries,
      ...ProductQueries,
    },
    Mutation: {
      ...DocumentMutations,
      ...CommentMutations,
      ...UserMutations,
      ...UserSettingsMutations,
      ...ProductMutations,
      ...ProductCommentMutations,
    },
    Subscription: {
      ...CommentSubscriptions,
      ...ProductCommentSubscriptions,
    },
    Document: {
      comments: CommentQueries.comments,
    },
    Comment: {
      user: UserQueries.user,
    },
    Product: {
      productComments: ProductCommentQueries.productComments,
    },
    ProductComment: {
      user: UserQueries.user,
    },
  },
};

export default schema;
