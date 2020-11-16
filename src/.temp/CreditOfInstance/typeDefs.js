const { default: gql } = require('graphql-tag')

const CreditOfInstance = gql`
  type CreditOfInstance {
    id: String!
    instance: Instance
    spent: Float
    lastRun: Float
    instanceId: String
  }

  type Query {
    findOneCreditOfInstance(
      where: CreditOfInstanceWhereUniqueInput!
    ): CreditOfInstance
    findFirstCreditOfInstance(
      where: CreditOfInstanceWhereInput
      orderBy: [CreditOfInstanceOrderByInput!]
      cursor: CreditOfInstanceWhereUniqueInput
      distinct: CreditOfInstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): [CreditOfInstance!]
    findManyCreditOfInstance(
      where: CreditOfInstanceWhereInput
      orderBy: [CreditOfInstanceOrderByInput!]
      cursor: CreditOfInstanceWhereUniqueInput
      distinct: CreditOfInstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): [CreditOfInstance!]
    findManyCreditOfInstanceCount(
      where: CreditOfInstanceWhereInput
      orderBy: [CreditOfInstanceOrderByInput!]
      cursor: CreditOfInstanceWhereUniqueInput
      distinct: CreditOfInstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateCreditOfInstance(
      where: CreditOfInstanceWhereInput
      orderBy: [CreditOfInstanceOrderByInput!]
      cursor: CreditOfInstanceWhereUniqueInput
      distinct: CreditOfInstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateCreditOfInstance
  }
  type Mutation {
    createOneCreditOfInstance(
      data: CreditOfInstanceCreateInput!
    ): CreditOfInstance!
    updateOneCreditOfInstance(
      where: CreditOfInstanceWhereUniqueInput!
      data: CreditOfInstanceUpdateInput!
    ): CreditOfInstance!
    deleteOneCreditOfInstance(
      where: CreditOfInstanceWhereUniqueInput!
    ): CreditOfInstance
    upsertOneCreditOfInstance(
      where: CreditOfInstanceWhereUniqueInput!
      create: CreditOfInstanceCreateInput!
      update: CreditOfInstanceUpdateInput!
    ): CreditOfInstance
    deleteManyCreditOfInstance(where: CreditOfInstanceWhereInput): BatchPayload
    updateManyCreditOfInstance(
      where: CreditOfInstanceWhereInput
      data: CreditOfInstanceUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  CreditOfInstance,
}
