const { queryField, arg } = require('@nexus/schema')

const GoogleSheetFindFirstQuery = queryField('findFirstGoogleSheet', {
  type: 'GoogleSheet',
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
    return prisma.googleSheet.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { GoogleSheetFindFirstQuery }
