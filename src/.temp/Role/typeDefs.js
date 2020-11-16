const { default: gql } = require('graphql-tag')

const Role = gql`
  type Role {
    id: String!
    name: String!
    slug: String!
    level: Int!
    billable: Boolean!
    permissions(
      where: PermissionWhereInput
      orderBy: PermissionOrderByInput
      cursor: PermissionWhereUniqueInput
      take: Int
      skip: Int
      distinct: PermissionDistinctFieldEnum
    ): [Permission!]!
    User(
      where: UserWhereInput
      orderBy: UserOrderByInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserDistinctFieldEnum
    ): [User!]!
  }

  type Query {
    findOneRole(where: RoleWhereUniqueInput!): Role
    findFirstRole(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleDistinctFieldEnum
      skip: Int
      take: Int
    ): [Role!]
    findManyRole(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleDistinctFieldEnum
      skip: Int
      take: Int
    ): [Role!]
    findManyRoleCount(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRole(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateRole
  }
  type Mutation {
    createOneRole(data: RoleCreateInput!): Role!
    updateOneRole(where: RoleWhereUniqueInput!, data: RoleUpdateInput!): Role!
    deleteOneRole(where: RoleWhereUniqueInput!): Role
    upsertOneRole(
      where: RoleWhereUniqueInput!
      create: RoleCreateInput!
      update: RoleUpdateInput!
    ): Role
    deleteManyRole(where: RoleWhereInput): BatchPayload
    updateManyRole(
      where: RoleWhereInput
      data: RoleUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Role,
}
