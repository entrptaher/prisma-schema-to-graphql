const { queryField, arg } = require('@nexus/schema')

const LogFindFirstQuery = queryField('findFirstLog', {
  type: 'Log',
  nullable: true,
  args: {
    where: 'LogWhereInput',
    orderBy: arg({ type: 'LogOrderByInput', list: true }),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.log.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { LogFindFirstQuery }
