const { queryField, arg } = require('@nexus/schema')

const ActivityFindManyQuery = queryField('findManyActivity', {
  type: 'Activity',
  list: [true],
  args: {
    where: 'ActivityWhereInput',
    orderBy: arg({ type: 'ActivityOrderByInput', list: true }),
    cursor: 'ActivityWhereUniqueInput',
    distinct: 'ActivityDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.activity.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { ActivityFindManyQuery }
