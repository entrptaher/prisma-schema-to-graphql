const { queryField, arg } = require('@nexus/schema')

const LogFindManyQuery = queryField('findManyLog', {
  type: 'Log',
  list: [true],
  args: {
    where: 'LogWhereInput',
    orderBy: arg({ type: 'LogOrderByInput', list: true }),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.log.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { LogFindManyQuery }
