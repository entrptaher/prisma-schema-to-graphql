const { default: gql } = require('graphql-tag')

const Activity = gql`
  type Activity {
    id: String!
    user: User!
    ip: String!
    browser: String!
    createdAt: DateTime!
    content: String!
    userId: String!
  }

  type Query {
    findOneActivity(where: ActivityWhereUniqueInput!): Activity
    findFirstActivity(
      where: ActivityWhereInput
      orderBy: [ActivityOrderByInput!]
      cursor: ActivityWhereUniqueInput
      distinct: ActivityDistinctFieldEnum
      skip: Int
      take: Int
    ): [Activity!]
    findManyActivity(
      where: ActivityWhereInput
      orderBy: [ActivityOrderByInput!]
      cursor: ActivityWhereUniqueInput
      distinct: ActivityDistinctFieldEnum
      skip: Int
      take: Int
    ): [Activity!]
    findManyActivityCount(
      where: ActivityWhereInput
      orderBy: [ActivityOrderByInput!]
      cursor: ActivityWhereUniqueInput
      distinct: ActivityDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateActivity(
      where: ActivityWhereInput
      orderBy: [ActivityOrderByInput!]
      cursor: ActivityWhereUniqueInput
      distinct: ActivityDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateActivity
  }
  type Mutation {
    createOneActivity(data: ActivityCreateInput!): Activity!
    updateOneActivity(
      where: ActivityWhereUniqueInput!
      data: ActivityUpdateInput!
    ): Activity!
    deleteOneActivity(where: ActivityWhereUniqueInput!): Activity
    upsertOneActivity(
      where: ActivityWhereUniqueInput!
      create: ActivityCreateInput!
      update: ActivityUpdateInput!
    ): Activity
    deleteManyActivity(where: ActivityWhereInput): BatchPayload
    updateManyActivity(
      where: ActivityWhereInput
      data: ActivityUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Activity,
}
