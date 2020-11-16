import gql from 'graphql-tag'

export default gql`
  type Limits {
    id: String!
    instancesPerUser: Int
    maxQueuedInstance: Int
    maxRunningInstance: Int
  }

  type Query {
    findOneLimits(where: LimitsWhereUniqueInput!): Limits
    findFirstLimits(
      where: LimitsWhereInput
      orderBy: [LimitsOrderByInput!]
      cursor: LimitsWhereUniqueInput
      distinct: LimitsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Limits!]
    findManyLimits(
      where: LimitsWhereInput
      orderBy: [LimitsOrderByInput!]
      cursor: LimitsWhereUniqueInput
      distinct: LimitsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Limits!]
    findManyLimitsCount(
      where: LimitsWhereInput
      orderBy: [LimitsOrderByInput!]
      cursor: LimitsWhereUniqueInput
      distinct: LimitsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateLimits(
      where: LimitsWhereInput
      orderBy: [LimitsOrderByInput!]
      cursor: LimitsWhereUniqueInput
      distinct: LimitsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateLimits
  }
  type Mutation {
    createOneLimits(data: LimitsCreateInput!): Limits!
    updateOneLimits(
      where: LimitsWhereUniqueInput!
      data: LimitsUpdateInput!
    ): Limits!
    deleteOneLimits(where: LimitsWhereUniqueInput!): Limits
    upsertOneLimits(
      where: LimitsWhereUniqueInput!
      create: LimitsCreateInput!
      update: LimitsUpdateInput!
    ): Limits
    deleteManyLimits(where: LimitsWhereInput): BatchPayload
    updateManyLimits(
      where: LimitsWhereInput
      data: LimitsUpdateManyMutationInput
    ): BatchPayload
  }
`
