const { queryField, arg } = require('@nexus/schema')

const SessionListFindManyQuery = queryField('findManySessionList', {
  type: 'SessionList',
  list: [true],
  args: {
    where: 'SessionListWhereInput',
    orderBy: arg({ type: 'SessionListOrderByInput', list: true }),
    cursor: 'SessionListWhereUniqueInput',
    distinct: 'SessionListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sessionList.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SessionListFindManyQuery }
