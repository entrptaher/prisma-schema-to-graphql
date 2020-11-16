import gql from 'graphql-tag'

export default gql`
  type Instance {
    id: String!
    user: User
    meta: Meta
    state: State
    actionList: [Json!]!
    isDynamic: Boolean
    dynamicStats: DynamicStats
    preserved: PreservedData
    session: Session
    createdAt: DateTime!
    updatedAt: DateTime!
    googleSheet: GoogleSheet
    dynamicInputCount: Int!
    schedule: Schedule
    DynamicStats(
      where: DynamicStatsWhereInput
      orderBy: DynamicStatsOrderByInput
      cursor: DynamicStatsWhereUniqueInput
      take: Int
      skip: Int
      distinct: DynamicStatsDistinctFieldEnum
    ): [DynamicStats!]!
    googleSheetId: String
    userId: String
    metaId: String
    stateId: String
    dynamicStatsId: String
    preservedDataId: String
    sessionId: String
    scheduleId: String
  }

  extend type User {
    instances(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  extend type Meta {
    instance: Instance
  }

  extend type State {
    instance: Instance
  }

  extend type DynamicStats {
    parent: Instance
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  extend type PreservedData {
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  extend type Session {
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  extend type GoogleSheet {
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  extend type Schedule {
    instance: Instance!
  }

  type Query {
    findOneInstance(where: InstanceWhereUniqueInput!): Instance
    findFirstInstance(
      where: InstanceWhereInput
      orderBy: [InstanceOrderByInput!]
      cursor: InstanceWhereUniqueInput
      distinct: InstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): [Instance!]
    findManyInstance(
      where: InstanceWhereInput
      orderBy: [InstanceOrderByInput!]
      cursor: InstanceWhereUniqueInput
      distinct: InstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): [Instance!]
    findManyInstanceCount(
      where: InstanceWhereInput
      orderBy: [InstanceOrderByInput!]
      cursor: InstanceWhereUniqueInput
      distinct: InstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateInstance(
      where: InstanceWhereInput
      orderBy: [InstanceOrderByInput!]
      cursor: InstanceWhereUniqueInput
      distinct: InstanceDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateInstance
  }
  type Mutation {
    createOneInstance(data: InstanceCreateInput!): Instance!
    updateOneInstance(
      where: InstanceWhereUniqueInput!
      data: InstanceUpdateInput!
    ): Instance!
    deleteOneInstance(where: InstanceWhereUniqueInput!): Instance
    upsertOneInstance(
      where: InstanceWhereUniqueInput!
      create: InstanceCreateInput!
      update: InstanceUpdateInput!
    ): Instance
    deleteManyInstance(where: InstanceWhereInput): BatchPayload
    updateManyInstance(
      where: InstanceWhereInput
      data: InstanceUpdateManyMutationInput
    ): BatchPayload
  }
`
