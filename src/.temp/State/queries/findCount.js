const { queryField, arg } = require('@nexus/schema')

const StateFindCountQuery = queryField('findManyStateCount', {
  type: 'Int',
  args: {
    where: 'StateWhereInput',
    orderBy: arg({ type: 'StateOrderByInput', list: true }),
    cursor: 'StateWhereUniqueInput',
    distinct: 'StateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.state.count(args)
  },
})
module.exports = { StateFindCountQuery }
