const { default: gql } = require('graphql-tag')

const Session = gql`
  type Session {
    id: String!
    lastSession: String!
    list(
      where: SessionListWhereInput
      orderBy: SessionListOrderByInput
      cursor: SessionListWhereUniqueInput
      take: Int
      skip: Int
      distinct: SessionListDistinctFieldEnum
    ): [SessionList!]!
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  type Query {
    findOneSession(where: SessionWhereUniqueInput!): Session
    findFirstSession(
      where: SessionWhereInput
      orderBy: [SessionOrderByInput!]
      cursor: SessionWhereUniqueInput
      distinct: SessionDistinctFieldEnum
      skip: Int
      take: Int
    ): [Session!]
    findManySession(
      where: SessionWhereInput
      orderBy: [SessionOrderByInput!]
      cursor: SessionWhereUniqueInput
      distinct: SessionDistinctFieldEnum
      skip: Int
      take: Int
    ): [Session!]
    findManySessionCount(
      where: SessionWhereInput
      orderBy: [SessionOrderByInput!]
      cursor: SessionWhereUniqueInput
      distinct: SessionDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSession(
      where: SessionWhereInput
      orderBy: [SessionOrderByInput!]
      cursor: SessionWhereUniqueInput
      distinct: SessionDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSession
  }
  type Mutation {
    createOneSession(data: SessionCreateInput!): Session!
    updateOneSession(
      where: SessionWhereUniqueInput!
      data: SessionUpdateInput!
    ): Session!
    deleteOneSession(where: SessionWhereUniqueInput!): Session
    upsertOneSession(
      where: SessionWhereUniqueInput!
      create: SessionCreateInput!
      update: SessionUpdateInput!
    ): Session
    deleteManySession(where: SessionWhereInput): BatchPayload
    updateManySession(
      where: SessionWhereInput
      data: SessionUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Session,
}
