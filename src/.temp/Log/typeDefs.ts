import gql from 'graphql-tag'

export default gql`
  type Log {
    id: String!
    instance: Instance
    session: String
    lastAction: String
    time: DateTime!
    message: String
    instanceId: String
  }

  extend type Instance {
    logs(
      where: LogWhereInput
      orderBy: LogOrderByInput
      cursor: LogWhereUniqueInput
      take: Int
      skip: Int
      distinct: LogDistinctFieldEnum
    ): [Log!]!
  }

  type Query {
    findOneLog(where: LogWhereUniqueInput!): Log
    findFirstLog(
      where: LogWhereInput
      orderBy: [LogOrderByInput!]
      cursor: LogWhereUniqueInput
      distinct: LogDistinctFieldEnum
      skip: Int
      take: Int
    ): [Log!]
    findManyLog(
      where: LogWhereInput
      orderBy: [LogOrderByInput!]
      cursor: LogWhereUniqueInput
      distinct: LogDistinctFieldEnum
      skip: Int
      take: Int
    ): [Log!]
    findManyLogCount(
      where: LogWhereInput
      orderBy: [LogOrderByInput!]
      cursor: LogWhereUniqueInput
      distinct: LogDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateLog(
      where: LogWhereInput
      orderBy: [LogOrderByInput!]
      cursor: LogWhereUniqueInput
      distinct: LogDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateLog
  }
  type Mutation {
    createOneLog(data: LogCreateInput!): Log!
    updateOneLog(where: LogWhereUniqueInput!, data: LogUpdateInput!): Log!
    deleteOneLog(where: LogWhereUniqueInput!): Log
    upsertOneLog(
      where: LogWhereUniqueInput!
      create: LogCreateInput!
      update: LogUpdateInput!
    ): Log
    deleteManyLog(where: LogWhereInput): BatchPayload
    updateManyLog(
      where: LogWhereInput
      data: LogUpdateManyMutationInput
    ): BatchPayload
  }
`
