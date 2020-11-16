const { default: gql } = require('graphql-tag')

const Navigation = gql`
  type Navigation {
    id: String!
    retry: Retry
    timeout: Int
    InstanceSettings(
      where: InstanceSettingsWhereInput
      orderBy: InstanceSettingsOrderByInput
      cursor: InstanceSettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceSettingsDistinctFieldEnum
    ): [InstanceSettings!]!
    retryId: String
  }

  type Query {
    findOneNavigation(where: NavigationWhereUniqueInput!): Navigation
    findFirstNavigation(
      where: NavigationWhereInput
      orderBy: [NavigationOrderByInput!]
      cursor: NavigationWhereUniqueInput
      distinct: NavigationDistinctFieldEnum
      skip: Int
      take: Int
    ): [Navigation!]
    findManyNavigation(
      where: NavigationWhereInput
      orderBy: [NavigationOrderByInput!]
      cursor: NavigationWhereUniqueInput
      distinct: NavigationDistinctFieldEnum
      skip: Int
      take: Int
    ): [Navigation!]
    findManyNavigationCount(
      where: NavigationWhereInput
      orderBy: [NavigationOrderByInput!]
      cursor: NavigationWhereUniqueInput
      distinct: NavigationDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateNavigation(
      where: NavigationWhereInput
      orderBy: [NavigationOrderByInput!]
      cursor: NavigationWhereUniqueInput
      distinct: NavigationDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateNavigation
  }
  type Mutation {
    createOneNavigation(data: NavigationCreateInput!): Navigation!
    updateOneNavigation(
      where: NavigationWhereUniqueInput!
      data: NavigationUpdateInput!
    ): Navigation!
    deleteOneNavigation(where: NavigationWhereUniqueInput!): Navigation
    upsertOneNavigation(
      where: NavigationWhereUniqueInput!
      create: NavigationCreateInput!
      update: NavigationUpdateInput!
    ): Navigation
    deleteManyNavigation(where: NavigationWhereInput): BatchPayload
    updateManyNavigation(
      where: NavigationWhereInput
      data: NavigationUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Navigation,
}
