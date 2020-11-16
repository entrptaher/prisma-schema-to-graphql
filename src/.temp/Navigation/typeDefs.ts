import gql from 'graphql-tag'

export default gql`
  type Navigation {
    id: String!
    retry: Retry
    timeout: Int
    retryId: String
  }

  extend type Retry {
    Navigation(
      where: NavigationWhereInput
      orderBy: NavigationOrderByInput
      cursor: NavigationWhereUniqueInput
      take: Int
      skip: Int
      distinct: NavigationDistinctFieldEnum
    ): [Navigation!]!
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
