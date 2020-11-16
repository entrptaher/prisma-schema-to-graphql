const { queryField, arg } = require('@nexus/schema')

const GoogleSheetFindCountQuery = queryField('findManyGoogleSheetCount', {
  type: 'Int',
  args: {
    where: 'GoogleSheetWhereInput',
    orderBy: arg({ type: 'GoogleSheetOrderByInput', list: true }),
    cursor: 'GoogleSheetWhereUniqueInput',
    distinct: 'GoogleSheetDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.googleSheet.count(args)
  },
})
module.exports = { GoogleSheetFindCountQuery }
