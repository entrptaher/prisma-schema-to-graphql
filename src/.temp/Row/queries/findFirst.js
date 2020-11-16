const { queryField, arg } = require('@nexus/schema')

const RowFindFirstQuery = queryField('findFirstRow', {
  type: 'Row',
  nullable: true,
  args: {
    where: 'RowWhereInput',
    orderBy: arg({ type: 'RowOrderByInput', list: true }),
    cursor: 'RowWhereUniqueInput',
    distinct: 'RowDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.row.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { RowFindFirstQuery }
