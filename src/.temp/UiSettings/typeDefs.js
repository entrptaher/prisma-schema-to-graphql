const { default: gql } = require('graphql-tag')

const UiSettings = gql`
  type UiSettings {
    id: String!
    rowsPerTable: Int
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
    findOneUiSettings(where: UiSettingsWhereUniqueInput!): UiSettings
    findFirstUiSettings(
      where: UiSettingsWhereInput
      orderBy: [UiSettingsOrderByInput!]
      cursor: UiSettingsWhereUniqueInput
      distinct: UiSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): [UiSettings!]
    findManyUiSettings(
      where: UiSettingsWhereInput
      orderBy: [UiSettingsOrderByInput!]
      cursor: UiSettingsWhereUniqueInput
      distinct: UiSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): [UiSettings!]
    findManyUiSettingsCount(
      where: UiSettingsWhereInput
      orderBy: [UiSettingsOrderByInput!]
      cursor: UiSettingsWhereUniqueInput
      distinct: UiSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateUiSettings(
      where: UiSettingsWhereInput
      orderBy: [UiSettingsOrderByInput!]
      cursor: UiSettingsWhereUniqueInput
      distinct: UiSettingsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateUiSettings
  }
  type Mutation {
    createOneUiSettings(data: UiSettingsCreateInput!): UiSettings!
    updateOneUiSettings(
      where: UiSettingsWhereUniqueInput!
      data: UiSettingsUpdateInput!
    ): UiSettings!
    deleteOneUiSettings(where: UiSettingsWhereUniqueInput!): UiSettings
    upsertOneUiSettings(
      where: UiSettingsWhereUniqueInput!
      create: UiSettingsCreateInput!
      update: UiSettingsUpdateInput!
    ): UiSettings
    deleteManyUiSettings(where: UiSettingsWhereInput): BatchPayload
    updateManyUiSettings(
      where: UiSettingsWhereInput
      data: UiSettingsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  UiSettings,
}
