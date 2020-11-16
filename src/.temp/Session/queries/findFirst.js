const { queryField, arg } = require('@nexus/schema')

const SessionFindFirstQuery = queryField('findFirstSession', {
  type: 'Session',
  nullable: true,
  args: {
    where: 'SessionWhereInput',
    orderBy: arg({ type: 'SessionOrderByInput', list: true }),
    cursor: 'SessionWhereUniqueInput',
    distinct: 'SessionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SessionFindFirstQuery }
