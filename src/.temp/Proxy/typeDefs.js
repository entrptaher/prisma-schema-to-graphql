const { default: gql } = require('graphql-tag')

const Proxy = gql`
  type Proxy {
    user: User
    id: String!
    host: String!
    port: Int!
    username: String
    password: String
    InstanceSettings: InstanceSettings
    instanceSettingsId: String
    userId: String
  }

  type Query {
    findOneProxy(where: ProxyWhereUniqueInput!): Proxy
    findFirstProxy(
      where: ProxyWhereInput
      orderBy: [ProxyOrderByInput!]
      cursor: ProxyWhereUniqueInput
      distinct: ProxyDistinctFieldEnum
      skip: Int
      take: Int
    ): [Proxy!]
    findManyProxy(
      where: ProxyWhereInput
      orderBy: [ProxyOrderByInput!]
      cursor: ProxyWhereUniqueInput
      distinct: ProxyDistinctFieldEnum
      skip: Int
      take: Int
    ): [Proxy!]
    findManyProxyCount(
      where: ProxyWhereInput
      orderBy: [ProxyOrderByInput!]
      cursor: ProxyWhereUniqueInput
      distinct: ProxyDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateProxy(
      where: ProxyWhereInput
      orderBy: [ProxyOrderByInput!]
      cursor: ProxyWhereUniqueInput
      distinct: ProxyDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateProxy
  }
  type Mutation {
    createOneProxy(data: ProxyCreateInput!): Proxy!
    updateOneProxy(
      where: ProxyWhereUniqueInput!
      data: ProxyUpdateInput!
    ): Proxy!
    deleteOneProxy(where: ProxyWhereUniqueInput!): Proxy
    upsertOneProxy(
      where: ProxyWhereUniqueInput!
      create: ProxyCreateInput!
      update: ProxyUpdateInput!
    ): Proxy
    deleteManyProxy(where: ProxyWhereInput): BatchPayload
    updateManyProxy(
      where: ProxyWhereInput
      data: ProxyUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Proxy,
}
