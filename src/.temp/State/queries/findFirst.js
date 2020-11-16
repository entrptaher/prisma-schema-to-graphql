const { queryField, arg } = require('@nexus/schema')

const StateFindFirstQuery = queryField('findFirstState', {
  type: 'State',
  nullable: true,
  args: {
    where: 'StateWhereInput',
    orderBy: arg({ type: 'StateOrderByInput', list: true }),
    cursor: 'StateWhereUniqueInput',
    distinct: 'StateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.state.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { StateFindFirstQuery }
