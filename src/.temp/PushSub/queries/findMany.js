const { queryField, arg } = require('@nexus/schema')

const PushSubFindManyQuery = queryField('findManyPushSub', {
  type: 'PushSub',
  list: [true],
  args: {
    where: 'PushSubWhereInput',
    orderBy: arg({ type: 'PushSubOrderByInput', list: true }),
    cursor: 'PushSubWhereUniqueInput',
    distinct: 'PushSubDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.pushSub.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { PushSubFindManyQuery }
