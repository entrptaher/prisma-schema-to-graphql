const { default: gql } = require('graphql-tag')

const GoogleSheet = gql`
  type GoogleSheet {
    id: String!
    isRealtimeEnabled: Boolean
    isOverWrite: Boolean
    spreadsheetId: String
    sheetId: String
    lastUpdateRange: String
    Instance(
      where: InstanceWhereInput
      orderBy: InstanceOrderByInput
      cursor: InstanceWhereUniqueInput
      take: Int
      skip: Int
      distinct: InstanceDistinctFieldEnum
    ): [Instance!]!
  }

  type Query {
    findOneGoogleSheet(where: GoogleSheetWhereUniqueInput!): GoogleSheet
    findFirstGoogleSheet(
      where: GoogleSheetWhereInput
      orderBy: [GoogleSheetOrderByInput!]
      cursor: GoogleSheetWhereUniqueInput
      distinct: GoogleSheetDistinctFieldEnum
      skip: Int
      take: Int
    ): [GoogleSheet!]
    findManyGoogleSheet(
      where: GoogleSheetWhereInput
      orderBy: [GoogleSheetOrderByInput!]
      cursor: GoogleSheetWhereUniqueInput
      distinct: GoogleSheetDistinctFieldEnum
      skip: Int
      take: Int
    ): [GoogleSheet!]
    findManyGoogleSheetCount(
      where: GoogleSheetWhereInput
      orderBy: [GoogleSheetOrderByInput!]
      cursor: GoogleSheetWhereUniqueInput
      distinct: GoogleSheetDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateGoogleSheet(
      where: GoogleSheetWhereInput
      orderBy: [GoogleSheetOrderByInput!]
      cursor: GoogleSheetWhereUniqueInput
      distinct: GoogleSheetDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateGoogleSheet
  }
  type Mutation {
    createOneGoogleSheet(data: GoogleSheetCreateInput!): GoogleSheet!
    updateOneGoogleSheet(
      where: GoogleSheetWhereUniqueInput!
      data: GoogleSheetUpdateInput!
    ): GoogleSheet!
    deleteOneGoogleSheet(where: GoogleSheetWhereUniqueInput!): GoogleSheet
    upsertOneGoogleSheet(
      where: GoogleSheetWhereUniqueInput!
      create: GoogleSheetCreateInput!
      update: GoogleSheetUpdateInput!
    ): GoogleSheet
    deleteManyGoogleSheet(where: GoogleSheetWhereInput): BatchPayload
    updateManyGoogleSheet(
      where: GoogleSheetWhereInput
      data: GoogleSheetUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  GoogleSheet,
}
