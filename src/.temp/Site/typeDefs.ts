import gql from 'graphql-tag'

export default gql`
  type Site {
    id: String!
    instance: Instance
    instanceSession: String!
    parent: SiteParent
    data: Json
    raw: [String!]!
    state: SiteState
    createdAt: DateTime!
    updatedAt: DateTime!
    instanceId: String
    siteParentId: String
    siteStateId: String
  }

  extend type Instance {
    sites(
      where: SiteWhereInput
      orderBy: SiteOrderByInput
      cursor: SiteWhereUniqueInput
      take: Int
      skip: Int
      distinct: SiteDistinctFieldEnum
    ): [Site!]!
  }

  extend type SiteParent {
    Site(
      where: SiteWhereInput
      orderBy: SiteOrderByInput
      cursor: SiteWhereUniqueInput
      take: Int
      skip: Int
      distinct: SiteDistinctFieldEnum
    ): [Site!]!
  }

  extend type SiteState {
    Site(
      where: SiteWhereInput
      orderBy: SiteOrderByInput
      cursor: SiteWhereUniqueInput
      take: Int
      skip: Int
      distinct: SiteDistinctFieldEnum
    ): [Site!]!
  }

  type Query {
    findOneSite(where: SiteWhereUniqueInput!): Site
    findFirstSite(
      where: SiteWhereInput
      orderBy: [SiteOrderByInput!]
      cursor: SiteWhereUniqueInput
      distinct: SiteDistinctFieldEnum
      skip: Int
      take: Int
    ): [Site!]
    findManySite(
      where: SiteWhereInput
      orderBy: [SiteOrderByInput!]
      cursor: SiteWhereUniqueInput
      distinct: SiteDistinctFieldEnum
      skip: Int
      take: Int
    ): [Site!]
    findManySiteCount(
      where: SiteWhereInput
      orderBy: [SiteOrderByInput!]
      cursor: SiteWhereUniqueInput
      distinct: SiteDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSite(
      where: SiteWhereInput
      orderBy: [SiteOrderByInput!]
      cursor: SiteWhereUniqueInput
      distinct: SiteDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSite
  }
  type Mutation {
    createOneSite(data: SiteCreateInput!): Site!
    updateOneSite(where: SiteWhereUniqueInput!, data: SiteUpdateInput!): Site!
    deleteOneSite(where: SiteWhereUniqueInput!): Site
    upsertOneSite(
      where: SiteWhereUniqueInput!
      create: SiteCreateInput!
      update: SiteUpdateInput!
    ): Site
    deleteManySite(where: SiteWhereInput): BatchPayload
    updateManySite(
      where: SiteWhereInput
      data: SiteUpdateManyMutationInput
    ): BatchPayload
  }
`