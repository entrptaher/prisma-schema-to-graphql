import gql from 'graphql-tag'

export default gql`
  type AdminOptions {
    id: String!
    schedules: Boolean
    downloads: Boolean
    imports: Boolean
    exports: Boolean
  }

  type Query {
    findOneAdminOptions(where: AdminOptionsWhereUniqueInput!): AdminOptions
    findFirstAdminOptions(
      where: AdminOptionsWhereInput
      orderBy: [AdminOptionsOrderByInput!]
      cursor: AdminOptionsWhereUniqueInput
      distinct: AdminOptionsDistinctFieldEnum
      skip: Int
      take: Int
    ): [AdminOptions!]
    findManyAdminOptions(
      where: AdminOptionsWhereInput
      orderBy: [AdminOptionsOrderByInput!]
      cursor: AdminOptionsWhereUniqueInput
      distinct: AdminOptionsDistinctFieldEnum
      skip: Int
      take: Int
    ): [AdminOptions!]
    findManyAdminOptionsCount(
      where: AdminOptionsWhereInput
      orderBy: [AdminOptionsOrderByInput!]
      cursor: AdminOptionsWhereUniqueInput
      distinct: AdminOptionsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateAdminOptions(
      where: AdminOptionsWhereInput
      orderBy: [AdminOptionsOrderByInput!]
      cursor: AdminOptionsWhereUniqueInput
      distinct: AdminOptionsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateAdminOptions
  }
  type Mutation {
    createOneAdminOptions(data: AdminOptionsCreateInput!): AdminOptions!
    updateOneAdminOptions(
      where: AdminOptionsWhereUniqueInput!
      data: AdminOptionsUpdateInput!
    ): AdminOptions!
    deleteOneAdminOptions(where: AdminOptionsWhereUniqueInput!): AdminOptions
    upsertOneAdminOptions(
      where: AdminOptionsWhereUniqueInput!
      create: AdminOptionsCreateInput!
      update: AdminOptionsUpdateInput!
    ): AdminOptions
    deleteManyAdminOptions(where: AdminOptionsWhereInput): BatchPayload
    updateManyAdminOptions(
      where: AdminOptionsWhereInput
      data: AdminOptionsUpdateManyMutationInput
    ): BatchPayload
  }
`
