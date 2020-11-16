const { queryField, arg } = require('@nexus/schema')

const SessionListFindFirstQuery = queryField('findFirstSessionList', {
  type: 'SessionList',
  nullable: true,
  args: {
    where: 'SessionListWhereInput',
    orderBy: arg({ type: 'SessionListOrderByInput', list: true }),
    cursor: 'SessionListWhereUniqueInput',
    distinct: 'SessionListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sessionList.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SessionListFindFirstQuery }
