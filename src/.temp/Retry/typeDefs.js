const { default: gql } = require('graphql-tag')

const Retry = gql`
  type Retry {
    id: String!
    delay: Int
    count: Int
    Navigation(
      where: NavigationWhereInput
      orderBy: NavigationOrderByInput
      cursor: NavigationWhereUniqueInput
      take: Int
      skip: Int
      distinct: NavigationDistinctFieldEnum
    ): [Navigation!]!
  }

  type Query {
    findOneRetry(where: RetryWhereUniqueInput!): Retry
    findFirstRetry(
      where: RetryWhereInput
      orderBy: [RetryOrderByInput!]
      cursor: RetryWhereUniqueInput
      distinct: RetryDistinctFieldEnum
      skip: Int
      take: Int
    ): [Retry!]
    findManyRetry(
      where: RetryWhereInput
      orderBy: [RetryOrderByInput!]
      cursor: RetryWhereUniqueInput
      distinct: RetryDistinctFieldEnum
      skip: Int
      take: Int
    ): [Retry!]
    findManyRetryCount(
      where: RetryWhereInput
      orderBy: [RetryOrderByInput!]
      cursor: RetryWhereUniqueInput
      distinct: RetryDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRetry(
      where: RetryWhereInput
      orderBy: [RetryOrderByInput!]
      cursor: RetryWhereUniqueInput
      distinct: RetryDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateRetry
  }
  type Mutation {
    createOneRetry(data: RetryCreateInput!): Retry!
    updateOneRetry(
      where: RetryWhereUniqueInput!
      data: RetryUpdateInput!
    ): Retry!
    deleteOneRetry(where: RetryWhereUniqueInput!): Retry
    upsertOneRetry(
      where: RetryWhereUniqueInput!
      create: RetryCreateInput!
      update: RetryUpdateInput!
    ): Retry
    deleteManyRetry(where: RetryWhereInput): BatchPayload
    updateManyRetry(
      where: RetryWhereInput
      data: RetryUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Retry,
}
