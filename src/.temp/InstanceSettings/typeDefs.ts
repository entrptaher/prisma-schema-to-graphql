import gql from 'graphql-tag'

export default gql`
  type InstanceSettings {
    id: String!
    navigation: Navigation
    limits: Limits
    intervals: Intervals
    navigationId: String
    limitsId: String
    intervalsId: String
  }

  extend type Navigation {
    InstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: InstanceSettingsOrderByInput
      cursor: InstanceSettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceSettingsDistinctFieldEnum
    ): [InstanceSettings!]!
  }

  extend type Limits {
    InstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: InstanceSettingsOrderByInput
      cursor: InstanceSettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceSettingsDistinctFieldEnum
    ): [InstanceSettings!]!
  }

  extend type Intervals {
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
