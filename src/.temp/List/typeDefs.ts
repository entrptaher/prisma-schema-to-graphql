import gql from 'graphql-tag'

export default gql`
  type List {
    id: String!
    user: User!
    title: String!
    headers: [String!]!
    createdAt: DateTime!
    userId: String!
  }

  extend type User {
    List(
      where: ListWhereInput
      orderBy: ListOrderByInput
      cursor: ListWhereUniqueInput
      take: Int
      skip: Int
      distinct: ListDistinctFieldEnum
    ): [List!]!
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
