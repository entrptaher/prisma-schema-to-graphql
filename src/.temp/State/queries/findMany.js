const { queryField, arg } = require('@nexus/schema')

const StateFindManyQuery = queryField('findManyState', {
  type: 'State',
  list: [true],
  args: {
    where: 'StateWhereInput',
    orderBy: arg({ type: 'StateOrderByInput', list: true }),
    cursor: 'StateWhereUniqueInput',
    distinct: 'StateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.state.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { StateFindManyQuery }
