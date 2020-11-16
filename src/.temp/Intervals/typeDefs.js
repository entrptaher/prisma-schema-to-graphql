const { default: gql } = require('graphql-tag')

const Intervals = gql`
  type Intervals {
    id: String!
    poll: Int
    tinyAction: Int
    InstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: InstanceSettingsOrderByInput
      cursor: InstanceSettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceSettingsDistinctFieldEnum
    ): [InstanceSettings!]!
  }

  type Query {
    findOneIntervals(where: IntervalsWhereUniqueInput!): Intervals
    findFirstIntervals(
      where: IntervalsWhereInput
      orderBy: [IntervalsOrderByInput!]
      cursor: IntervalsWhereUniqueInput
      distinct: IntervalsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Intervals!]
    findManyIntervals(
      where: IntervalsWhereInput
      orderBy: [IntervalsOrderByInput!]
      cursor: IntervalsWhereUniqueInput
      distinct: IntervalsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Intervals!]
    findManyIntervalsCount(
      where: IntervalsWhereInput
      orderBy: [IntervalsOrderByInput!]
      cursor: IntervalsWhereUniqueInput
      distinct: IntervalsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateIntervals(
      where: IntervalsWhereInput
      orderBy: [IntervalsOrderByInput!]
      cursor: IntervalsWhereUniqueInput
      distinct: IntervalsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateIntervals
  }
  type Mutation {
    createOneIntervals(data: IntervalsCreateInput!): Intervals!
    updateOneIntervals(
      where: IntervalsWhereUniqueInput!
      data: IntervalsUpdateInput!
    ): Intervals!
    deleteOneIntervals(where: IntervalsWhereUniqueInput!): Intervals
    upsertOneIntervals(
      where: IntervalsWhereUniqueInput!
      create: IntervalsCreateInput!
      update: IntervalsUpdateInput!
    ): Intervals
    deleteManyIntervals(where: IntervalsWhereInput): BatchPayload
    updateManyIntervals(
      where: IntervalsWhereInput
      data: IntervalsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Intervals,
}
