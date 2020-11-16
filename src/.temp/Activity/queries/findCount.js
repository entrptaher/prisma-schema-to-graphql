const { queryField, arg } = require('@nexus/schema')

const ActivityFindCountQuery = queryField('findManyActivityCount', {
  type: 'Int',
  args: {
    where: 'ActivityWhereInput',
    orderBy: arg({ type: 'ActivityOrderByInput', list: true }),
    cursor: 'ActivityWhereUniqueInput',
    distinct: 'ActivityDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.activity.count(args)
  },
})
module.exports = { ActivityFindCountQuery }
