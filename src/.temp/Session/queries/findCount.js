const { queryField, arg } = require('@nexus/schema')

const SessionFindCountQuery = queryField('findManySessionCount', {
  type: 'Int',
  args: {
    where: 'SessionWhereInput',
    orderBy: arg({ type: 'SessionOrderByInput', list: true }),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.session.count(args)
  },
})
module.exports = { SessionFindCountQuery }
