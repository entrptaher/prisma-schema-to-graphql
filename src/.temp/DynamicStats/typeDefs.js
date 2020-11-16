const { default: gql } = require('graphql-tag')

const DynamicStats = gql`
  type DynamicStats {
    id: String!
    url: String
    urlsCount: Int
    duplicateCount: Int
    invalidCount: Int
    currIndex: Int
    paginationCount: Int
    lastPagination: Int
    parent: Instance
    fetchedParentPages: Int
    linksRemainingInQueue: Int
    resumeState: Json
    parentList: List
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
    instanceId: String
    listId: String
  }

  type Query {
    findOneDynamicStats(where: DynamicStatsWhereUniqueInput!): DynamicStats
    findFirstDynamicStats(
      where: DynamicStatsWhereInput
      orderBy: [DynamicStatsOrderByInput!]
      cursor: DynamicStatsWhereUniqueInput
      distinct: DynamicStatsDistinctFieldEnum
      skip: Int
      take: Int
    ): [DynamicStats!]
    findManyDynamicStats(
      where: DynamicStatsWhereInput
      orderBy: [DynamicStatsOrderByInput!]
      cursor: DynamicStatsWhereUniqueInput
      distinct: DynamicStatsDistinctFieldEnum
      skip: Int
      take: Int
    ): [DynamicStats!]
    findManyDynamicStatsCount(
      where: DynamicStatsWhereInput
      orderBy: [DynamicStatsOrderByInput!]
      cursor: DynamicStatsWhereUniqueInput
      distinct: DynamicStatsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateDynamicStats(
      where: DynamicStatsWhereInput
      orderBy: [DynamicStatsOrderByInput!]
      cursor: DynamicStatsWhereUniqueInput
      distinct: DynamicStatsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateDynamicStats
  }
  type Mutation {
    createOneDynamicStats(data: DynamicStatsCreateInput!): DynamicStats!
    updateOneDynamicStats(
      where: DynamicStatsWhereUniqueInput!
      data: DynamicStatsUpdateInput!
    ): DynamicStats!
    deleteOneDynamicStats(where: DynamicStatsWhereUniqueInput!): DynamicStats
    upsertOneDynamicStats(
      where: DynamicStatsWhereUniqueInput!
      create: DynamicStatsCreateInput!
      update: DynamicStatsUpdateInput!
    ): DynamicStats
    deleteManyDynamicStats(where: DynamicStatsWhereInput): BatchPayload
    updateManyDynamicStats(
      where: DynamicStatsWhereInput
      data: DynamicStatsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  DynamicStats,
}
