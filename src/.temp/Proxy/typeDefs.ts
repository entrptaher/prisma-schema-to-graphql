import gql from 'graphql-tag'

export default gql`
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

  extend type User {
    proxies(
      where: ProxyWhereInput
      orderBy: ProxyOrderByInput
      cursor: ProxyWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProxyDistinctFieldEnum
    ): [Proxy!]!
  }

  extend type InstanceSettings {
    proxies(
      where: ProxyWhereInput
      orderBy: ProxyOrderByInput
      cursor: ProxyWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProxyDistinctFieldEnum
    ): [Proxy!]!
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
