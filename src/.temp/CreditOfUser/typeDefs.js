const { default: gql } = require('graphql-tag')

const CreditOfUser = gql`
  type CreditOfUser {
    id: String!
    remaining: Float
    spent: Float
    lifeTimeSpent: Float
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

module.exports = {
  CreditOfUser,
}
