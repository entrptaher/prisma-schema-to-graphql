const { default: gql } = require('graphql-tag')

const Instance = gql`
  type Instance {
    id: String!
    user: User
    meta: Meta
    state: State
    credit: CreditOfInstance
    actionList: [Json!]!
    isDynamic: Boolean
    dynamicStats: DynamicStats
    logs(
      where: LogWhereInput
      orderBy: LogOrderByInput
      cursor: LogWhereUniqueInput
      take: Int
      skip: Int
      distinct: LogDistinctFieldEnum
    ): [Log!]!
    sourceCodes(
      where: SourceCodeWhereInput
      orderBy: SourceCodeOrderByInput
      cursor: SourceCodeWhereUniqueInput
      take: Int
      skip: Int
      distinct: SourceCodeDistinctFieldEnum
    ): [SourceCode!]!
    screenshots(
      where: ScreenshotWhereInput
      orderBy: ScreenshotOrderByInput
      cursor: ScreenshotWhereUniqueInput
      take: Int
      skip: Int
      distinct: ScreenshotDistinctFieldEnum
    ): [Screenshot!]!
    sites(
      where: SiteWhereInput
      orderBy: SiteOrderByInput
      cursor: SiteWhereUniqueInput
      take: Int
      skip: Int
      distinct: SiteDistinctFieldEnum
    ): [Site!]!
    preserved: PreservedData
    session: Session
    createdAt: DateTime!
    updatedAt: DateTime!
    googleSheet: GoogleSheet
    dynamicInputCount: Int!
    schedule: Schedule
    currentInstance(
      where: SiteParentWhereInput
      orderBy: SiteParentOrderByInput
      cursor: SiteParentWhereUniqueInput
      take: Int
      skip: Int
      distinct: SiteParentDistinctFieldEnum
    ): [SiteParent!]!
    parentInstance(
      where: SiteParentWhereInput
      orderBy: SiteParentOrderByInput
      cursor: SiteParentWhereUniqueInput
      take: Int
      skip: Int
      distinct: SiteParentDistinctFieldEnum
    ): [SiteParent!]!
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

module.exports = {
  Instance,
}
