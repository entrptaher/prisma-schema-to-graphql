import gql from 'graphql-tag'

export default gql`
  type Key {
    id: String!
    public: String!
  }

  type Query {
    findOneKey(where: KeyWhereUniqueInput!): Key
    findFirstKey(
      where: KeyWhereInput
      orderBy: [KeyOrderByInput!]
      cursor: KeyWhereUniqueInput
      distinct: KeyDistinctFieldEnum
      skip: Int
      take: Int
    ): [Key!]
    findManyKey(
      where: KeyWhereInput
      orderBy: [KeyOrderByInput!]
      cursor: KeyWhereUniqueInput
      distinct: KeyDistinctFieldEnum
      skip: Int
      take: Int
    ): [Key!]
    findManyKeyCount(
      where: KeyWhereInput
      orderBy: [KeyOrderByInput!]
      cursor: KeyWhereUniqueInput
      distinct: KeyDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateKey(
      where: KeyWhereInput
      orderBy: [KeyOrderByInput!]
      cursor: KeyWhereUniqueInput
      distinct: KeyDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateKey
  }
  type Mutation {
    createOneKey(data: KeyCreateInput!): Key!
    updateOneKey(where: KeyWhereUniqueInput!, data: KeyUpdateInput!): Key!
    deleteOneKey(where: KeyWhereUniqueInput!): Key
    upsertOneKey(
      where: KeyWhereUniqueInput!
      create: KeyCreateInput!
      update: KeyUpdateInput!
    ): Key
    deleteManyKey(where: KeyWhereInput): BatchPayload
    updateManyKey(
      where: KeyWhereInput
      data: KeyUpdateManyMutationInput
    ): BatchPayload
  }
`
