import gql from 'graphql-tag'

export default gql`
  type StripeCreds {
    id: String!
    customerId: String
    subscriptionId: String
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
