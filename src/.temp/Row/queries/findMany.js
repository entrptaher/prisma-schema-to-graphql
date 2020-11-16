const { queryField, arg } = require('@nexus/schema')

const RowFindManyQuery = queryField('findManyRow', {
  type: 'Row',
  list: [true],
  args: {
    where: 'RowWhereInput',
    orderBy: arg({ type: 'RowOrderByInput', list: true }),
    cursor: 'RowWhereUniqueInput',
    distinct: 'RowDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.row.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { RowFindManyQuery }
