import gql from 'graphql-tag'

export default gql`
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
    autoRenewId: String!
  }

  extend type AutoRenew {
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
