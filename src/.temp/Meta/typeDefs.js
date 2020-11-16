const { default: gql } = require('graphql-tag')

const Meta = gql`
  type Meta {
    id: String!
    instance: Instance
    title: String!
    urlRaw: String!
    userAgent: String!
    vW: Int!
    vH: Int!
  }

  type Query {
    findOneMeta(where: MetaWhereUniqueInput!): Meta
    findFirstMeta(
      where: MetaWhereInput
      orderBy: [MetaOrderByInput!]
      cursor: MetaWhereUniqueInput
      distinct: MetaDistinctFieldEnum
      skip: Int
      take: Int
    ): [Meta!]
    findManyMeta(
      where: MetaWhereInput
      orderBy: [MetaOrderByInput!]
      cursor: MetaWhereUniqueInput
      distinct: MetaDistinctFieldEnum
      skip: Int
      take: Int
    ): [Meta!]
    findManyMetaCount(
      where: MetaWhereInput
      orderBy: [MetaOrderByInput!]
      cursor: MetaWhereUniqueInput
      distinct: MetaDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateMeta(
      where: MetaWhereInput
      orderBy: [MetaOrderByInput!]
      cursor: MetaWhereUniqueInput
      distinct: MetaDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateMeta
  }
  type Mutation {
    createOneMeta(data: MetaCreateInput!): Meta!
    updateOneMeta(where: MetaWhereUniqueInput!, data: MetaUpdateInput!): Meta!
    deleteOneMeta(where: MetaWhereUniqueInput!): Meta
    upsertOneMeta(
      where: MetaWhereUniqueInput!
      create: MetaCreateInput!
      update: MetaUpdateInput!
    ): Meta
    deleteManyMeta(where: MetaWhereInput): BatchPayload
    updateManyMeta(
      where: MetaWhereInput
      data: MetaUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Meta,
}
