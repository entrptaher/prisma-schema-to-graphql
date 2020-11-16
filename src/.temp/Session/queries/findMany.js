const { queryField, arg } = require('@nexus/schema')

const SessionFindManyQuery = queryField('findManySession', {
  type: 'Session',
  list: [true],
  args: {
    where: 'SessionWhereInput',
    orderBy: arg({ type: 'SessionOrderByInput', list: true }),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SessionFindManyQuery }
