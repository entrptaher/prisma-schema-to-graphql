import gql from 'graphql-tag'

export default gql`
  type Row {
    id: String!
    values: [String!]!
    List: List
    listId: String
  }

  extend type List {
    rows(
      where: RowWhereInput
      orderBy: RowOrderByInput
      cursor: RowWhereUniqueInput
      take: Int
      skip: Int
      distinct: RowDistinctFieldEnum
    ): [Row!]!
  }

  type Query {
    findOneRow(where: RowWhereUniqueInput!): Row
    findFirstRow(
      where: RowWhereInput
      orderBy: [RowOrderByInput!]
      cursor: RowWhereUniqueInput
      distinct: RowDistinctFieldEnum
      skip: Int
      take: Int
    ): [Row!]
    findManyRow(
      where: RowWhereInput
      orderBy: [RowOrderByInput!]
      cursor: RowWhereUniqueInput
      distinct: RowDistinctFieldEnum
      skip: Int
      take: Int
    ): [Row!]
    findManyRowCount(
      where: RowWhereInput
      orderBy: [RowOrderByInput!]
      cursor: RowWhereUniqueInput
      distinct: RowDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRow(
      where: RowWhereInput
      orderBy: [RowOrderByInput!]
      cursor: RowWhereUniqueInput
      distinct: RowDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateRow
  }
  type Mutation {
    createOneRow(data: RowCreateInput!): Row!
    updateOneRow(where: RowWhereUniqueInput!, data: RowUpdateInput!): Row!
    deleteOneRow(where: RowWhereUniqueInput!): Row
    upsertOneRow(
      where: RowWhereUniqueInput!
      create: RowCreateInput!
      update: RowUpdateInput!
    ): Row
    deleteManyRow(where: RowWhereInput): BatchPayload
    updateManyRow(
      where: RowWhereInput
      data: RowUpdateManyMutationInput
    ): BatchPayload
  }
`
