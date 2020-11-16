const { default: gql } = require('graphql-tag')

const Package = gql`
  type Package {
    id: String!
    stripeProdId: String!
    stripePriceId: String!
    name: String!
    slug: String!
    allocatedCredits: Float!
    minCost: Float!
    minPage: String
    additionalCred: Float
    autoRenew: AutoRenew!
    price: Int!
    billable: Boolean!
    User(
      where: UserWhereInput
      orderBy: UserOrderByInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserDistinctFieldEnum
    ): [User!]!
    autoRenewId: String!
  }

  type Query {
    findOnePackage(where: PackageWhereUniqueInput!): Package
    findFirstPackage(
      where: PackageWhereInput
      orderBy: [PackageOrderByInput!]
      cursor: PackageWhereUniqueInput
      distinct: PackageDistinctFieldEnum
      skip: Int
      take: Int
    ): [Package!]
    findManyPackage(
      where: PackageWhereInput
      orderBy: [PackageOrderByInput!]
      cursor: PackageWhereUniqueInput
      distinct: PackageDistinctFieldEnum
      skip: Int
      take: Int
    ): [Package!]
    findManyPackageCount(
      where: PackageWhereInput
      orderBy: [PackageOrderByInput!]
      cursor: PackageWhereUniqueInput
      distinct: PackageDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePackage(
      where: PackageWhereInput
      orderBy: [PackageOrderByInput!]
      cursor: PackageWhereUniqueInput
      distinct: PackageDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregatePackage
  }
  type Mutation {
    createOnePackage(data: PackageCreateInput!): Package!
    updateOnePackage(
      where: PackageWhereUniqueInput!
      data: PackageUpdateInput!
    ): Package!
    deleteOnePackage(where: PackageWhereUniqueInput!): Package
    upsertOnePackage(
      where: PackageWhereUniqueInput!
      create: PackageCreateInput!
      update: PackageUpdateInput!
    ): Package
    deleteManyPackage(where: PackageWhereInput): BatchPayload
    updateManyPackage(
      where: PackageWhereInput
      data: PackageUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Package,
}
