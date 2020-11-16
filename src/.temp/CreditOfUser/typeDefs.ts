import gql from 'graphql-tag'

export default gql`
  type CreditOfUser {
    id: String!
    remaining: Float
    spent: Float
    lifeTimeSpent: Float
  }

  type Query {
    findOneCreditOfUser(where: CreditOfUserWhereUniqueInput!): CreditOfUser
    findFirstCreditOfUser(
      where: CreditOfUserWhereInput
      orderBy: [CreditOfUserOrderByInput!]
      cursor: CreditOfUserWhereUniqueInput
      distinct: CreditOfUserDistinctFieldEnum
      skip: Int
      take: Int
    ): [CreditOfUser!]
    findManyCreditOfUser(
      where: CreditOfUserWhereInput
      orderBy: [CreditOfUserOrderByInput!]
      cursor: CreditOfUserWhereUniqueInput
      distinct: CreditOfUserDistinctFieldEnum
      skip: Int
      take: Int
    ): [CreditOfUser!]
    findManyCreditOfUserCount(
      where: CreditOfUserWhereInput
      orderBy: [CreditOfUserOrderByInput!]
      cursor: CreditOfUserWhereUniqueInput
      distinct: CreditOfUserDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateCreditOfUser(
      where: CreditOfUserWhereInput
      orderBy: [CreditOfUserOrderByInput!]
      cursor: CreditOfUserWhereUniqueInput
      distinct: CreditOfUserDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateCreditOfUser
  }
  type Mutation {
    createOneCreditOfUser(data: CreditOfUserCreateInput!): CreditOfUser!
    updateOneCreditOfUser(
      where: CreditOfUserWhereUniqueInput!
      data: CreditOfUserUpdateInput!
    ): CreditOfUser!
    deleteOneCreditOfUser(where: CreditOfUserWhereUniqueInput!): CreditOfUser
    upsertOneCreditOfUser(
      where: CreditOfUserWhereUniqueInput!
      create: CreditOfUserCreateInput!
      update: CreditOfUserUpdateInput!
    ): CreditOfUser
    deleteManyCreditOfUser(where: CreditOfUserWhereInput): BatchPayload
    updateManyCreditOfUser(
      where: CreditOfUserWhereInput
      data: CreditOfUserUpdateManyMutationInput
    ): BatchPayload
  }
`
