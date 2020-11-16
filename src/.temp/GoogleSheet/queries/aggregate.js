const { queryField, arg } = require('@nexus/schema')

const GoogleSheetAggregateQuery = queryField('aggregateGoogleSheet', {
  type: 'AggregateGoogleSheet',
  nullable: true,
  args: {
    where: 'GoogleSheetWhereInput',
    orderBy: arg({ type: 'GoogleSheetOrderByInput', list: true }),
    cursor: 'GoogleSheetWhereUniqueInput',
    distinct: 'GoogleSheetDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleSheet.aggregate({ ...args, ...select })
  },
})
module.exports = { GoogleSheetAggregateQuery }
