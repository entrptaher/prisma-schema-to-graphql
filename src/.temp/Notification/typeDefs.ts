import gql from 'graphql-tag'

export default gql`
  type Notification {
    user: User!
    id: String!
    title: String!
    description: String!
    url: String!
    createdAt: DateTime!
    count: Int!
    unread: Boolean
    userId: String!
  }

  extend type User {
    notifications(
      where: NotificationWhereInput
      orderBy: NotificationOrderByInput
      cursor: NotificationWhereUniqueInput
      take: Int
      skip: Int
      distinct: NotificationDistinctFieldEnum
    ): [Notification!]!
  }

  type Query {
    findOneNotification(where: NotificationWhereUniqueInput!): Notification
    findFirstNotification(
      where: NotificationWhereInput
      orderBy: [NotificationOrderByInput!]
      cursor: NotificationWhereUniqueInput
      distinct: NotificationDistinctFieldEnum
      skip: Int
      take: Int
    ): [Notification!]
    findManyNotification(
      where: NotificationWhereInput
      orderBy: [NotificationOrderByInput!]
      cursor: NotificationWhereUniqueInput
      distinct: NotificationDistinctFieldEnum
      skip: Int
      take: Int
    ): [Notification!]
    findManyNotificationCount(
      where: NotificationWhereInput
      orderBy: [NotificationOrderByInput!]
      cursor: NotificationWhereUniqueInput
      distinct: NotificationDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateNotification(
      where: NotificationWhereInput
      orderBy: [NotificationOrderByInput!]
      cursor: NotificationWhereUniqueInput
      distinct: NotificationDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateNotification
  }
  type Mutation {
    createOneNotification(data: NotificationCreateInput!): Notification!
    updateOneNotification(
      where: NotificationWhereUniqueInput!
      data: NotificationUpdateInput!
    ): Notification!
    deleteOneNotification(where: NotificationWhereUniqueInput!): Notification
    upsertOneNotification(
      where: NotificationWhereUniqueInput!
      create: NotificationCreateInput!
      update: NotificationUpdateInput!
    ): Notification
    deleteManyNotification(where: NotificationWhereInput): BatchPayload
    updateManyNotification(
      where: NotificationWhereInput
      data: NotificationUpdateManyMutationInput
    ): BatchPayload
  }
`
