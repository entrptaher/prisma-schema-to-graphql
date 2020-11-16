const { default: gql } = require('graphql-tag')

const AdminOptions = gql`
  type AdminOptions {
    id: String!
    schedules: Boolean
    downloads: Boolean
    imports: Boolean
    exports: Boolean
    Settings(
      where: SettingsWhereInput
      orderBy: SettingsOrderByInput
      cursor: SettingsWhereUniqueInput
      take: Int
      skip: Int
      distinct: SettingsDistinctFieldEnum
    ): [Settings!]!
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

module.exports = {
  AdminOptions,
}
