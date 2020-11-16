const { queryField, arg } = require('@nexus/schema')

const PushSubFindCountQuery = queryField('findManyPushSubCount', {
  type: 'Int',
  args: {
    where: 'PushSubWhereInput',
    orderBy: arg({ type: 'PushSubOrderByInput', list: true }),
    cursor: 'PushSubWhereUniqueInput',
    distinct: 'PushSubDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.pushSub.count(args)
  },
})
module.exports = { PushSubFindCountQuery }
