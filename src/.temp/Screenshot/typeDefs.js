const { default: gql } = require('graphql-tag')

const Screenshot = gql`
  type Screenshot {
    instance: Instance
    id: String!
    actionId: String!
    prevActionId: String!
    nextActionId: String
    url: String!
    createdAt: DateTime!
    instanceId: String
  }

  type Query {
    findOneScreenshot(where: ScreenshotWhereUniqueInput!): Screenshot
    findFirstScreenshot(
      where: ScreenshotWhereInput
      orderBy: [ScreenshotOrderByInput!]
      cursor: ScreenshotWhereUniqueInput
      distinct: ScreenshotDistinctFieldEnum
      skip: Int
      take: Int
    ): [Screenshot!]
    findManyScreenshot(
      where: ScreenshotWhereInput
      orderBy: [ScreenshotOrderByInput!]
      cursor: ScreenshotWhereUniqueInput
      distinct: ScreenshotDistinctFieldEnum
      skip: Int
      take: Int
    ): [Screenshot!]
    findManyScreenshotCount(
      where: ScreenshotWhereInput
      orderBy: [ScreenshotOrderByInput!]
      cursor: ScreenshotWhereUniqueInput
      distinct: ScreenshotDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateScreenshot(
      where: ScreenshotWhereInput
      orderBy: [ScreenshotOrderByInput!]
      cursor: ScreenshotWhereUniqueInput
      distinct: ScreenshotDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateScreenshot
  }
  type Mutation {
    createOneScreenshot(data: ScreenshotCreateInput!): Screenshot!
    updateOneScreenshot(
      where: ScreenshotWhereUniqueInput!
      data: ScreenshotUpdateInput!
    ): Screenshot!
    deleteOneScreenshot(where: ScreenshotWhereUniqueInput!): Screenshot
    upsertOneScreenshot(
      where: ScreenshotWhereUniqueInput!
      create: ScreenshotCreateInput!
      update: ScreenshotUpdateInput!
    ): Screenshot
    deleteManyScreenshot(where: ScreenshotWhereInput): BatchPayload
    updateManyScreenshot(
      where: ScreenshotWhereInput
      data: ScreenshotUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Screenshot,
}
