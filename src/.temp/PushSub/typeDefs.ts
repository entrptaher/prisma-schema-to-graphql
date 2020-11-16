import gql from 'graphql-tag'

export default gql`
  type PushSub {
    id: String!
    value: String!
  }

  type Query {
    findOnePushSub(where: PushSubWhereUniqueInput!): PushSub
    findFirstPushSub(
      where: PushSubWhereInput
      orderBy: [PushSubOrderByInput!]
      cursor: PushSubWhereUniqueInput
      distinct: PushSubDistinctFieldEnum
      skip: Int
      take: Int
    ): [PushSub!]
    findManyPushSub(
      where: PushSubWhereInput
      orderBy: [PushSubOrderByInput!]
      cursor: PushSubWhereUniqueInput
      distinct: PushSubDistinctFieldEnum
      skip: Int
      take: Int
    ): [PushSub!]
    findManyPushSubCount(
      where: PushSubWhereInput
      orderBy: [PushSubOrderByInput!]
      cursor: PushSubWhereUniqueInput
      distinct: PushSubDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePushSub(
      where: PushSubWhereInput
      orderBy: [PushSubOrderByInput!]
      cursor: PushSubWhereUniqueInput
      distinct: PushSubDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregatePushSub
  }
  type Mutation {
    createOnePushSub(data: PushSubCreateInput!): PushSub!
    updateOnePushSub(
      where: PushSubWhereUniqueInput!
      data: PushSubUpdateInput!
    ): PushSub!
    deleteOnePushSub(where: PushSubWhereUniqueInput!): PushSub
    upsertOnePushSub(
      where: PushSubWhereUniqueInput!
      create: PushSubCreateInput!
      update: PushSubUpdateInput!
    ): PushSub
    deleteManyPushSub(where: PushSubWhereInput): BatchPayload
    updateManyPushSub(
      where: PushSubWhereInput
      data: PushSubUpdateManyMutationInput
    ): BatchPayload
  }
`
