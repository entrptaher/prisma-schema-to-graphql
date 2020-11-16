const { default: gql } = require('graphql-tag')

const InstanceSettings = gql`
  type InstanceSettings {
    id: String!
    proxies(
      where: ProxyWhereInput
      orderBy: ProxyOrderByInput
      cursor: ProxyWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProxyDistinctFieldEnum
    ): [Proxy!]!
    navigation: Navigation
    limits: Limits
    intervals: Intervals
    Settings(
      where: SettingsWhereInput
      orderBy: SettingsOrderByInput
      cursor: SettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: SettingsDistinctFieldEnum
    ): [Settings!]!
    navigationId: String
    limitsId: String
    intervalsId: String
  }

  type Query {
    findOneInstanceSettings(
      where: InstanceSettingsWhereUniqueInput!
    ): InstanceSettings
    findFirstInstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: [InstanceSettingsOrderByInput!]
      cursor: InstanceSettingsWhereUniqueInput
      distinct: InstanceSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): [InstanceSettings!]
    findManyInstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: [InstanceSettingsOrderByInput!]
      cursor: InstanceSettingsWhereUniqueInput
      distinct: InstanceSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): [InstanceSettings!]
    findManyInstanceSettingsCount(
      where: InstanceSettingsWhereInput
      orderBy: [InstanceSettingsOrderByInput!]
      cursor: InstanceSettingsWhereUniqueInput
      distinct: InstanceSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateInstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: [InstanceSettingsOrderByInput!]
      cursor: InstanceSettingsWhereUniqueInput
      distinct: InstanceSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateInstanceSettings
  }
  type Mutation {
    createOneInstanceSettings(
      data: InstanceSettingsCreateInput!
    ): InstanceSettings!
    updateOneInstanceSettings(
      where: InstanceSettingsWhereUniqueInput!
      data: InstanceSettingsUpdateInput!
    ): InstanceSettings!
    deleteOneInstanceSettings(
      where: InstanceSettingsWhereUniqueInput!
    ): InstanceSettings
    upsertOneInstanceSettings(
      where: InstanceSettingsWhereUniqueInput!
      create: InstanceSettingsCreateInput!
      update: InstanceSettingsUpdateInput!
    ): InstanceSettings
    deleteManyInstanceSettings(where: InstanceSettingsWhereInput): BatchPayload
    updateManyInstanceSettings(
      where: InstanceSettingsWhereInput
      data: InstanceSettingsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  InstanceSettings,
}
