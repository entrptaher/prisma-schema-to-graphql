const { queryField, arg } = require('@nexus/schema')

const GoogleSheetFindManyQuery = queryField('findManyGoogleSheet', {
  type: 'GoogleSheet',
  list: [true],
  args: {
    where: 'GoogleSheetWhereInput',
    orderBy: arg({ type: 'GoogleSheetOrderByInput', list: true }),
    cursor: 'GoogleSheetWhereUniqueInput',
    distinct: 'GoogleSheetDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleSheet.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { GoogleSheetFindManyQuery }
