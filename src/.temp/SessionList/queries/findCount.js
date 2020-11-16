const { queryField, arg } = require('@nexus/schema')

const SessionListFindCountQuery = queryField('findManySessionListCount', {
  type: 'Int',
  args: {
    where: 'SessionListWhereInput',
    orderBy: arg({ type: 'SessionListOrderByInput', list: true }),
    cursor: 'SessionListWhereUniqueInput',
    distinct: 'SessionListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sessionList.count(args)
  },
})
module.exports = { SessionListFindCountQuery }
