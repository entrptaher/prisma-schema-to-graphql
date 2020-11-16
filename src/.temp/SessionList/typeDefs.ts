import gql from 'graphql-tag'

export default gql`
  type SessionList {
    id: String!
    session: String!
    createdAt: DateTime!
    Session: Session
    sessionId: String
  }

  extend type Session {
    list(
      where: SessionListWhereInput
      orderBy: SessionListOrderByInput
      cursor: SessionListWhereUniqueInput
      take: Int
      skip: Int
      distinct: SessionListDistinctFieldEnum
    ): [SessionList!]!
  }

  type Query {
    findOneSessionList(where: SessionListWhereUniqueInput!): SessionList
    findFirstSessionList(
      where: SessionListWhereInput
      orderBy: [SessionListOrderByInput!]
      cursor: SessionListWhereUniqueInput
      distinct: SessionListDistinctFieldEnum
      skip: Int
      take: Int
    ): [SessionList!]
    findManySessionList(
      where: SessionListWhereInput
      orderBy: [SessionListOrderByInput!]
      cursor: SessionListWhereUniqueInput
      distinct: SessionListDistinctFieldEnum
      skip: Int
      take: Int
    ): [SessionList!]
    findManySessionListCount(
      where: SessionListWhereInput
      orderBy: [SessionListOrderByInput!]
      cursor: SessionListWhereUniqueInput
      distinct: SessionListDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSessionList(
      where: SessionListWhereInput
      orderBy: [SessionListOrderByInput!]
      cursor: SessionListWhereUniqueInput
      distinct: SessionListDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSessionList
  }
  type Mutation {
    createOneSessionList(data: SessionListCreateInput!): SessionList!
    updateOneSessionList(
      where: SessionListWhereUniqueInput!
      data: SessionListUpdateInput!
    ): SessionList!
    deleteOneSessionList(where: SessionListWhereUniqueInput!): SessionList
    upsertOneSessionList(
      where: SessionListWhereUniqueInput!
      create: SessionListCreateInput!
      update: SessionListUpdateInput!
    ): SessionList
    deleteManySessionList(where: SessionListWhereInput): BatchPayload
    updateManySessionList(
      where: SessionListWhereInput
      data: SessionListUpdateManyMutationInput
    ): BatchPayload
  }
`
