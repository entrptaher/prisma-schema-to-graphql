const { queryField, arg } = require('@nexus/schema')

const ActivityFindFirstQuery = queryField('findFirstActivity', {
  type: 'Activity',
  nullable: true,
  args: {
    where: 'ActivityWhereInput',
    orderBy: arg({ type: 'ActivityOrderByInput', list: true }),
    cursor: 'ActivityWhereUniqueInput',
    distinct: 'ActivityDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.activity.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { ActivityFindFirstQuery }
