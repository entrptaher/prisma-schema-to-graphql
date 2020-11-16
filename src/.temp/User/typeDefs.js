const { default: gql } = require('graphql-tag')

const User = gql`
  type User {
    id: String!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    role: Role!
    avatar: String
    stripeCreds: StripeCreds
    pushSub: String
    instances(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
    proxies(
      where: ProxyWhereInput
      orderBy: ProxyOrderByInput
      cursor: ProxyWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProxyDistinctFieldEnum
    ): [Proxy!]!
    recaptchaKey: String
    credit: CreditOfUser
    enabled: Boolean
    package: Package
    orders(
      where: OrderWhereInput
      orderBy: OrderOrderByInput
      cursor: OrderWhereUniqueInput
      take: Int
      skip: Int
      distinct: OrderDistinctFieldEnum
    ): [Order!]!
    activities(
      where: ActivityWhereInput
      orderBy: ActivityOrderByInput
      cursor: ActivityWhereUniqueInput
      take: Int
      skip: Int
      distinct: ActivityDistinctFieldEnum
    ): [Activity!]!
    key: Key
    emailVerified: Boolean
    emailToken: String
    emailTokenExpiry: Float
    resetToken: String
    resetTokenExpiry: Float
    createdAt: DateTime!
    updatedAt: DateTime!
    googleAuth: GoogleAuth
    notifications(
      where: NotificationWhereInput
      orderBy: NotificationOrderByInput
      cursor: NotificationWhereUniqueInput
      take: Int
      skip: Int
      distinct: NotificationDistinctFieldEnum
    ): [Notification!]!
    List(
      where: ListWhereInput
      orderBy: ListOrderByInput
      cursor: ListWhereUniqueInput
      take: Int
      skip: Int
      distinct: ListDistinctFieldEnum
    ): [List!]!
    roleId: String!
    stripeCredsId: String
    creditOfUserId: String
    packageId: String
    keyId: String
    googleAuthId: String
  }

  type Query {
    findOneUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserDistinctFieldEnum
      skip: Int
      take: Int
    ): [User!]
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserDistinctFieldEnum
      skip: Int
      take: Int
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateUser
  }
  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(where: UserWhereUniqueInput!, data: UserUpdateInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      where: UserWhereInput
      data: UserUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  User,
}
