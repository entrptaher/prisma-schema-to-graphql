import gql from 'graphql-tag'

export default gql`
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

  extend type Instance {
    sourceCodes(
      where: SourceCodeWhereInput
      orderBy: SourceCodeOrderByInput
      cursor: SourceCodeWhereUniqueInput
      take: Int
      skip: Int
      distinct: SourceCodeDistinctFieldEnum
    ): [SourceCode!]!
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
