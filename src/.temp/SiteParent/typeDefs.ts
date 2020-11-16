import gql from 'graphql-tag'

export default gql`
  type SiteParent {
    id: String!
    parentInstance: Instance
    currentInstance: Instance
    actionChain: [Json!]!
    parentInstanceId: String
    currentInstanceId: String
  }

  extend type Instance {
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
  }

  type Query {
    findOneSiteParent(where: SiteParentWhereUniqueInput!): SiteParent
    findFirstSiteParent(
      where: SiteParentWhereInput
      orderBy: [SiteParentOrderByInput!]
      cursor: SiteParentWhereUniqueInput
      distinct: SiteParentDistinctFieldEnum
      skip: Int
      take: Int
    ): [SiteParent!]
    findManySiteParent(
      where: SiteParentWhereInput
      orderBy: [SiteParentOrderByInput!]
      cursor: SiteParentWhereUniqueInput
      distinct: SiteParentDistinctFieldEnum
      skip: Int
      take: Int
    ): [SiteParent!]
    findManySiteParentCount(
      where: SiteParentWhereInput
      orderBy: [SiteParentOrderByInput!]
      cursor: SiteParentWhereUniqueInput
      distinct: SiteParentDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSiteParent(
      where: SiteParentWhereInput
      orderBy: [SiteParentOrderByInput!]
      cursor: SiteParentWhereUniqueInput
      distinct: SiteParentDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSiteParent
  }
  type Mutation {
    createOneSiteParent(data: SiteParentCreateInput!): SiteParent!
    updateOneSiteParent(
      where: SiteParentWhereUniqueInput!
      data: SiteParentUpdateInput!
    ): SiteParent!
    deleteOneSiteParent(where: SiteParentWhereUniqueInput!): SiteParent
    upsertOneSiteParent(
      where: SiteParentWhereUniqueInput!
      create: SiteParentCreateInput!
      update: SiteParentUpdateInput!
    ): SiteParent
    deleteManySiteParent(where: SiteParentWhereInput): BatchPayload
    updateManySiteParent(
      where: SiteParentWhereInput
      data: SiteParentUpdateManyMutationInput
    ): BatchPayload
  }
`
