import gql from 'graphql-tag'

export default gql`
  type PreservedData {
    id: String!
    cookies: String
  }

  type Query {
    findOnePreservedData(where: PreservedDataWhereUniqueInput!): PreservedData
    findFirstPreservedData(
      where: PreservedDataWhereInput
      orderBy: [PreservedDataOrderByInput!]
      cursor: PreservedDataWhereUniqueInput
      distinct: PreservedDataDistinctFieldEnum
      skip: Int
      take: Int
    ): [PreservedData!]
    findManyPreservedData(
      where: PreservedDataWhereInput
      orderBy: [PreservedDataOrderByInput!]
      cursor: PreservedDataWhereUniqueInput
      distinct: PreservedDataDistinctFieldEnum
      skip: Int
      take: Int
    ): [PreservedData!]
    findManyPreservedDataCount(
      where: PreservedDataWhereInput
      orderBy: [PreservedDataOrderByInput!]
      cursor: PreservedDataWhereUniqueInput
      distinct: PreservedDataDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePreservedData(
      where: PreservedDataWhereInput
      orderBy: [PreservedDataOrderByInput!]
      cursor: PreservedDataWhereUniqueInput
      distinct: PreservedDataDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregatePreservedData
  }
  type Mutation {
    createOnePreservedData(data: PreservedDataCreateInput!): PreservedData!
    updateOnePreservedData(
      where: PreservedDataWhereUniqueInput!
      data: PreservedDataUpdateInput!
    ): PreservedData!
    deleteOnePreservedData(where: PreservedDataWhereUniqueInput!): PreservedData
    upsertOnePreservedData(
      where: PreservedDataWhereUniqueInput!
      create: PreservedDataCreateInput!
      update: PreservedDataUpdateInput!
    ): PreservedData
    deleteManyPreservedData(where: PreservedDataWhereInput): BatchPayload
    updateManyPreservedData(
      where: PreservedDataWhereInput
      data: PreservedDataUpdateManyMutationInput
    ): BatchPayload
  }
`
