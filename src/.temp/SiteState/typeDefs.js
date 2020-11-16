const { default: gql } = require('graphql-tag')

const SiteState = gql`
  type SiteState {
    id: String!
    server: String
    url: String
    index: Int
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
    findOneSiteState(where: SiteStateWhereUniqueInput!): SiteState
    findFirstSiteState(
      where: SiteStateWhereInput
      orderBy: [SiteStateOrderByInput!]
      cursor: SiteStateWhereUniqueInput
      distinct: SiteStateDistinctFieldEnum
      skip: Int
      take: Int
    ): [SiteState!]
    findManySiteState(
      where: SiteStateWhereInput
      orderBy: [SiteStateOrderByInput!]
      cursor: SiteStateWhereUniqueInput
      distinct: SiteStateDistinctFieldEnum
      skip: Int
      take: Int
    ): [SiteState!]
    findManySiteStateCount(
      where: SiteStateWhereInput
      orderBy: [SiteStateOrderByInput!]
      cursor: SiteStateWhereUniqueInput
      distinct: SiteStateDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSiteState(
      where: SiteStateWhereInput
      orderBy: [SiteStateOrderByInput!]
      cursor: SiteStateWhereUniqueInput
      distinct: SiteStateDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSiteState
  }
  type Mutation {
    createOneSiteState(data: SiteStateCreateInput!): SiteState!
    updateOneSiteState(
      where: SiteStateWhereUniqueInput!
      data: SiteStateUpdateInput!
    ): SiteState!
    deleteOneSiteState(where: SiteStateWhereUniqueInput!): SiteState
    upsertOneSiteState(
      where: SiteStateWhereUniqueInput!
      create: SiteStateCreateInput!
      update: SiteStateUpdateInput!
    ): SiteState
    deleteManySiteState(where: SiteStateWhereInput): BatchPayload
    updateManySiteState(
      where: SiteStateWhereInput
      data: SiteStateUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  SiteState,
}
