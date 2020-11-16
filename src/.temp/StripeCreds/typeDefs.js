const { default: gql } = require('graphql-tag')

const StripeCreds = gql`
  type StripeCreds {
    id: String!
    customerId: String
    subscriptionId: String
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
    findOneStripeCreds(where: StripeCredsWhereUniqueInput!): StripeCreds
    findFirstStripeCreds(
      where: StripeCredsWhereInput
      orderBy: [StripeCredsOrderByInput!]
      cursor: StripeCredsWhereUniqueInput
      distinct: StripeCredsDistinctFieldEnum
      skip: Int
      take: Int
    ): [StripeCreds!]
    findManyStripeCreds(
      where: StripeCredsWhereInput
      orderBy: [StripeCredsOrderByInput!]
      cursor: StripeCredsWhereUniqueInput
      distinct: StripeCredsDistinctFieldEnum
      skip: Int
      take: Int
    ): [StripeCreds!]
    findManyStripeCredsCount(
      where: StripeCredsWhereInput
      orderBy: [StripeCredsOrderByInput!]
      cursor: StripeCredsWhereUniqueInput
      distinct: StripeCredsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateStripeCreds(
      where: StripeCredsWhereInput
      orderBy: [StripeCredsOrderByInput!]
      cursor: StripeCredsWhereUniqueInput
      distinct: StripeCredsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateStripeCreds
  }
  type Mutation {
    createOneStripeCreds(data: StripeCredsCreateInput!): StripeCreds!
    updateOneStripeCreds(
      where: StripeCredsWhereUniqueInput!
      data: StripeCredsUpdateInput!
    ): StripeCreds!
    deleteOneStripeCreds(where: StripeCredsWhereUniqueInput!): StripeCreds
    upsertOneStripeCreds(
      where: StripeCredsWhereUniqueInput!
      create: StripeCredsCreateInput!
      update: StripeCredsUpdateInput!
    ): StripeCreds
    deleteManyStripeCreds(where: StripeCredsWhereInput): BatchPayload
    updateManyStripeCreds(
      where: StripeCredsWhereInput
      data: StripeCredsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  StripeCreds,
}
