const { queryField, arg } = require('@nexus/schema')

const RowFindCountQuery = queryField('findManyRowCount', {
  type: 'Int',
  args: {
    where: 'RowWhereInput',
    orderBy: arg({ type: 'RowOrderByInput', list: true }),
    cursor: 'RowWhereUniqueInput',
    distinct: 'RowDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.row.count(args)
  },
})
module.exports = { RowFindCountQuery }
