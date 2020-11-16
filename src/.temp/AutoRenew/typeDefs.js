const { default: gql } = require('graphql-tag')

const AutoRenew = gql`
  type AutoRenew {
    id: String!
    onExhaust: Boolean
    monthly: Boolean
    Package(
      where: PackageWhereInput
      orderBy: PackageOrderByInput
      cursor: PackageWhereUniqueInput
      take: Int
      skip: Int
      distinct: PackageDistinctFieldEnum
    ): [Package!]!
  }

  type Query {
    findOneAutoRenew(where: AutoRenewWhereUniqueInput!): AutoRenew
    findFirstAutoRenew(
      where: AutoRenewWhereInput
      orderBy: [AutoRenewOrderByInput!]
      cursor: AutoRenewWhereUniqueInput
      distinct: AutoRenewDistinctFieldEnum
      skip: Int
      take: Int
    ): [AutoRenew!]
    findManyAutoRenew(
      where: AutoRenewWhereInput
      orderBy: [AutoRenewOrderByInput!]
      cursor: AutoRenewWhereUniqueInput
      distinct: AutoRenewDistinctFieldEnum
      skip: Int
      take: Int
    ): [AutoRenew!]
    findManyAutoRenewCount(
      where: AutoRenewWhereInput
      orderBy: [AutoRenewOrderByInput!]
      cursor: AutoRenewWhereUniqueInput
      distinct: AutoRenewDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateAutoRenew(
      where: AutoRenewWhereInput
      orderBy: [AutoRenewOrderByInput!]
      cursor: AutoRenewWhereUniqueInput
      distinct: AutoRenewDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateAutoRenew
  }
  type Mutation {
    createOneAutoRenew(data: AutoRenewCreateInput!): AutoRenew!
    updateOneAutoRenew(
      where: AutoRenewWhereUniqueInput!
      data: AutoRenewUpdateInput!
    ): AutoRenew!
    deleteOneAutoRenew(where: AutoRenewWhereUniqueInput!): AutoRenew
    upsertOneAutoRenew(
      where: AutoRenewWhereUniqueInput!
      create: AutoRenewCreateInput!
      update: AutoRenewUpdateInput!
    ): AutoRenew
    deleteManyAutoRenew(where: AutoRenewWhereInput): BatchPayload
    updateManyAutoRenew(
      where: AutoRenewWhereInput
      data: AutoRenewUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  AutoRenew,
}
