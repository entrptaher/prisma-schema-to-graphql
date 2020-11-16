const { default: gql } = require('graphql-tag')

const GoogleAuth = gql`
  type GoogleAuth {
    id: String!
    accessToken: String
    refreshToken: String
    scope: String
    idToken: String
    User(
      where: UserWhereInput
      orderBy: UserOrderByInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserDistinctFieldEnum
    ): [User!]!
  }

  type Query {
    findOneGoogleAuth(where: GoogleAuthWhereUniqueInput!): GoogleAuth
    findFirstGoogleAuth(
      where: GoogleAuthWhereInput
      orderBy: [GoogleAuthOrderByInput!]
      cursor: GoogleAuthWhereUniqueInput
      distinct: GoogleAuthDistinctFieldEnum
      skip: Int
      take: Int
    ): [GoogleAuth!]
    findManyGoogleAuth(
      where: GoogleAuthWhereInput
      orderBy: [GoogleAuthOrderByInput!]
      cursor: GoogleAuthWhereUniqueInput
      distinct: GoogleAuthDistinctFieldEnum
      skip: Int
      take: Int
    ): [GoogleAuth!]
    findManyGoogleAuthCount(
      where: GoogleAuthWhereInput
      orderBy: [GoogleAuthOrderByInput!]
      cursor: GoogleAuthWhereUniqueInput
      distinct: GoogleAuthDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateGoogleAuth(
      where: GoogleAuthWhereInput
      orderBy: [GoogleAuthOrderByInput!]
      cursor: GoogleAuthWhereUniqueInput
      distinct: GoogleAuthDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateGoogleAuth
  }
  type Mutation {
    createOneGoogleAuth(data: GoogleAuthCreateInput!): GoogleAuth!
    updateOneGoogleAuth(
      where: GoogleAuthWhereUniqueInput!
      data: GoogleAuthUpdateInput!
    ): GoogleAuth!
    deleteOneGoogleAuth(where: GoogleAuthWhereUniqueInput!): GoogleAuth
    upsertOneGoogleAuth(
      where: GoogleAuthWhereUniqueInput!
      create: GoogleAuthCreateInput!
      update: GoogleAuthUpdateInput!
    ): GoogleAuth
    deleteManyGoogleAuth(where: GoogleAuthWhereInput): BatchPayload
    updateManyGoogleAuth(
      where: GoogleAuthWhereInput
      data: GoogleAuthUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  GoogleAuth,
}
