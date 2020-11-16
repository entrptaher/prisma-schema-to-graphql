const { default: gql } = require('graphql-tag')

const SourceCode = gql`
  type SourceCode {
    id: String!
    instance: Instance!
    session: String!
    time: DateTime!
    bucket: String!
    file: String!
    actionId: String!
    instanceId: String!
  }

  type Query {
    findOneSourceCode(where: SourceCodeWhereUniqueInput!): SourceCode
    findFirstSourceCode(
      where: SourceCodeWhereInput
      orderBy: [SourceCodeOrderByInput!]
      cursor: SourceCodeWhereUniqueInput
      distinct: SourceCodeDistinctFieldEnum
      skip: Int
      take: Int
    ): [SourceCode!]
    findManySourceCode(
      where: SourceCodeWhereInput
      orderBy: [SourceCodeOrderByInput!]
      cursor: SourceCodeWhereUniqueInput
      distinct: SourceCodeDistinctFieldEnum
      skip: Int
      take: Int
    ): [SourceCode!]
    findManySourceCodeCount(
      where: SourceCodeWhereInput
      orderBy: [SourceCodeOrderByInput!]
      cursor: SourceCodeWhereUniqueInput
      distinct: SourceCodeDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateSourceCode(
      where: SourceCodeWhereInput
      orderBy: [SourceCodeOrderByInput!]
      cursor: SourceCodeWhereUniqueInput
      distinct: SourceCodeDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateSourceCode
  }
  type Mutation {
    createOneSourceCode(data: SourceCodeCreateInput!): SourceCode!
    updateOneSourceCode(
      where: SourceCodeWhereUniqueInput!
      data: SourceCodeUpdateInput!
    ): SourceCode!
    deleteOneSourceCode(where: SourceCodeWhereUniqueInput!): SourceCode
    upsertOneSourceCode(
      where: SourceCodeWhereUniqueInput!
      create: SourceCodeCreateInput!
      update: SourceCodeUpdateInput!
    ): SourceCode
    deleteManySourceCode(where: SourceCodeWhereInput): BatchPayload
    updateManySourceCode(
      where: SourceCodeWhereInput
      data: SourceCodeUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  SourceCode,
}
