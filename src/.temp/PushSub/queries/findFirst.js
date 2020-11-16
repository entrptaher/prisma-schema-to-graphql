const { queryField, arg } = require('@nexus/schema')

const PushSubFindFirstQuery = queryField('findFirstPushSub', {
  type: 'PushSub',
  nullable: true,
  args: {
    where: 'PushSubWhereInput',
    orderBy: arg({ type: 'PushSubOrderByInput', list: true }),
    cursor: 'PushSubWhereUniqueInput',
    distinct: 'PushSubDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.pushSub.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { PushSubFindFirstQuery }
