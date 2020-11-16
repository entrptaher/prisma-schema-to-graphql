const { default: gql } = require('graphql-tag')

const Permission = gql`
  type Permission {
    id: String!
    description: String!
    slug: String!
    Role: Role
    roleId: String
  }

  type Query {
    findOnePermission(where: PermissionWhereUniqueInput!): Permission
    findFirstPermission(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionDistinctFieldEnum
      skip: Int
      take: Int
    ): [Permission!]
    findManyPermission(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionDistinctFieldEnum
      skip: Int
      take: Int
    ): [Permission!]
    findManyPermissionCount(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePermission(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregatePermission
  }
  type Mutation {
    createOnePermission(data: PermissionCreateInput!): Permission!
    updateOnePermission(
      where: PermissionWhereUniqueInput!
      data: PermissionUpdateInput!
    ): Permission!
    deleteOnePermission(where: PermissionWhereUniqueInput!): Permission
    upsertOnePermission(
      where: PermissionWhereUniqueInput!
      create: PermissionCreateInput!
      update: PermissionUpdateInput!
    ): Permission
    deleteManyPermission(where: PermissionWhereInput): BatchPayload
    updateManyPermission(
      where: PermissionWhereInput
      data: PermissionUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Permission,
}
