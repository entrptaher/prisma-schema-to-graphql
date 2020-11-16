const { default: gql } = require('graphql-tag')

const Settings = gql`
  type Settings {
    id: String!
    options: AdminOptions
    instance: InstanceSettings
    ui: UiSettings
    adminOptionsId: String
    instanceSettingsId: String
    uiSettingsId: String
  }

  type Query {
    findOneSettings(where: SettingsWhereUniqueInput!): Settings
    findFirstSettings(
      where: SettingsWhereInput
      orderBy: [SettingsOrderByInput!]
      cursor: SettingsWhereUniqueInput
      distinct: SettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Settings!]
    findManySettings(
      where: SettingsWhereInput
      orderBy: [SettingsOrderByInput!]
      cursor: SettingsWhereUniqueInput
      distinct: SettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Settings!]
    findManySettingsCount(
      where: SettingsWhereInput
      orderBy: [SettingsOrderByInput!]
      cursor: SettingsWhereUniqueInput
      distinct: SettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSettings(
      where: SettingsWhereInput
      orderBy: [SettingsOrderByInput!]
      cursor: SettingsWhereUniqueInput
      distinct: SettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSettings
  }
  type Mutation {
    createOneSettings(data: SettingsCreateInput!): Settings!
    updateOneSettings(
      where: SettingsWhereUniqueInput!
      data: SettingsUpdateInput!
    ): Settings!
    deleteOneSettings(where: SettingsWhereUniqueInput!): Settings
    upsertOneSettings(
      where: SettingsWhereUniqueInput!
      create: SettingsCreateInput!
      update: SettingsUpdateInput!
    ): Settings
    deleteManySettings(where: SettingsWhereInput): BatchPayload
    updateManySettings(
      where: SettingsWhereInput
      data: SettingsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Settings,
}
