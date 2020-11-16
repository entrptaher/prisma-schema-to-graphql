import gql from 'graphql-tag'

export default gql`
  type State {
    id: String!
    isEnabled: Boolean
    isRequested: Boolean
    isQueued: Boolean
    isRunning: Boolean
    isCanceled: Boolean
    isForcedStopped: Boolean
    isFinished: Boolean
    status: String!
    startedAt: DateTime
    queuedAt: DateTime
    finishedAt: DateTime
    updatedAt: DateTime!
    lastRunTime: Float
    paginationCount: Int
  }

  type Query {
    findOneState(where: StateWhereUniqueInput!): State
    findFirstState(
      where: StateWhereInput
      orderBy: [StateOrderByInput!]
      cursor: StateWhereUniqueInput
      distinct: StateDistinctFieldEnum
      skip: Int
      take: Int
    ): [State!]
    findManyState(
      where: StateWhereInput
      orderBy: [StateOrderByInput!]
      cursor: StateWhereUniqueInput
      distinct: StateDistinctFieldEnum
      skip: Int
      take: Int
    ): [State!]
    findManyStateCount(
      where: StateWhereInput
      orderBy: [StateOrderByInput!]
      cursor: StateWhereUniqueInput
      distinct: StateDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateState(
      where: StateWhereInput
      orderBy: [StateOrderByInput!]
      cursor: StateWhereUniqueInput
      distinct: StateDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateState
  }
  type Mutation {
    createOneState(data: StateCreateInput!): State!
    updateOneState(
      where: StateWhereUniqueInput!
      data: StateUpdateInput!
    ): State!
    deleteOneState(where: StateWhereUniqueInput!): State
    upsertOneState(
      where: StateWhereUniqueInput!
      create: StateCreateInput!
      update: StateUpdateInput!
    ): State
    deleteManyState(where: StateWhereInput): BatchPayload
    updateManyState(
      where: StateWhereInput
      data: StateUpdateManyMutationInput
    ): BatchPayload
  }
`
