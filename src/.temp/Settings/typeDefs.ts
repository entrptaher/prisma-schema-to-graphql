import gql from 'graphql-tag'

export default gql`
  type Settings {
    id: String!
    options: AdminOptions
    instance: InstanceSettings
    ui: UiSettings
    adminOptionsId: String
    instanceSettingsId: String
    uiSettingsId: String
  }

  extend type AdminOptions {
    Settings(
      where: SettingsWhereInput
      orderBy: SettingsOrderByInput
      cursor: SettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: SettingsDistinctFieldEnum
    ): [Settings!]!
  }

  extend type InstanceSettings {
    Settings(
      where: SettingsWhereInput
      orderBy: SettingsOrderByInput
      cursor: SettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: SettingsDistinctFieldEnum
    ): [Settings!]!
  }

  extend type UiSettings {
    Settings(
      where: SettingsWhereInput
      orderBy: SettingsOrderByInput
      cursor: SettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: SettingsDistinctFieldEnum
    ): [Settings!]!
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
