const { default: gql } = require('graphql-tag')

const List = gql`
  type List {
    id: String!
    user: User!
    title: String!
    headers: [String!]!
    rows(
      where: RowWhereInput
      orderBy: RowOrderByInput
      cursor: RowWhereUniqueInput
      take: Int
      skip: Int
      distinct: RowDistinctFieldEnum
    ): [Row!]!
    createdAt: DateTime!
    DynamicStats(
      where: DynamicStatsWhereInput
      orderBy: DynamicStatsOrderByInput
      cursor: DynamicStatsWhereUniqueInput
      take: Int
      skip: Int
      distinct: DynamicStatsDistinctFieldEnum
    ): [DynamicStats!]!
    userId: String!
  }

  type Query {
    findOneList(where: ListWhereUniqueInput!): List
    findFirstList(
      where: ListWhereInput
      orderBy: [ListOrderByInput!]
      cursor: ListWhereUniqueInput
      distinct: ListDistinctFieldEnum
      skip: Int
      take: Int
    ): [List!]
    findManyList(
      where: ListWhereInput
      orderBy: [ListOrderByInput!]
      cursor: ListWhereUniqueInput
      distinct: ListDistinctFieldEnum
      skip: Int
      take: Int
    ): [List!]
    findManyListCount(
      where: ListWhereInput
      orderBy: [ListOrderByInput!]
      cursor: ListWhereUniqueInput
      distinct: ListDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateList(
      where: ListWhereInput
      orderBy: [ListOrderByInput!]
      cursor: ListWhereUniqueInput
      distinct: ListDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateList
  }
  type Mutation {
    createOneList(data: ListCreateInput!): List!
    updateOneList(where: ListWhereUniqueInput!, data: ListUpdateInput!): List!
    deleteOneList(where: ListWhereUniqueInput!): List
    upsertOneList(
      where: ListWhereUniqueInput!
      create: ListCreateInput!
      update: ListUpdateInput!
    ): List
    deleteManyList(where: ListWhereInput): BatchPayload
    updateManyList(
      where: ListWhereInput
      data: ListUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  List,
}
