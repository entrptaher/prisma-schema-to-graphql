const { default: gql } = require('graphql-tag')

const Schedule = gql`
  type Schedule {
    id: String!
    instance: Instance!
    isEnabled: Boolean
    nextRunTime: DateTime
    data: Json!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    findOneSchedule(where: ScheduleWhereUniqueInput!): Schedule
    findFirstSchedule(
      where: ScheduleWhereInput
      orderBy: [ScheduleOrderByInput!]
      cursor: ScheduleWhereUniqueInput
      distinct: ScheduleDistinctFieldEnum
      skip: Int
      take: Int
    ): [Schedule!]
    findManySchedule(
      where: ScheduleWhereInput
      orderBy: [ScheduleOrderByInput!]
      cursor: ScheduleWhereUniqueInput
      distinct: ScheduleDistinctFieldEnum
      skip: Int
      take: Int
    ): [Schedule!]
    findManyScheduleCount(
      where: ScheduleWhereInput
      orderBy: [ScheduleOrderByInput!]
      cursor: ScheduleWhereUniqueInput
      distinct: ScheduleDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSchedule(
      where: ScheduleWhereInput
      orderBy: [ScheduleOrderByInput!]
      cursor: ScheduleWhereUniqueInput
      distinct: ScheduleDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSchedule
  }
  type Mutation {
    createOneSchedule(data: ScheduleCreateInput!): Schedule!
    updateOneSchedule(
      where: ScheduleWhereUniqueInput!
      data: ScheduleUpdateInput!
    ): Schedule!
    deleteOneSchedule(where: ScheduleWhereUniqueInput!): Schedule
    upsertOneSchedule(
      where: ScheduleWhereUniqueInput!
      create: ScheduleCreateInput!
      update: ScheduleUpdateInput!
    ): Schedule
    deleteManySchedule(where: ScheduleWhereInput): BatchPayload
    updateManySchedule(
      where: ScheduleWhereInput
      data: ScheduleUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Schedule,
}
