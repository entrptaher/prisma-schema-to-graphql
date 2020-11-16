const { queryField, arg } = require('@nexus/schema')

const LogFindCountQuery = queryField('findManyLogCount', {
  type: 'Int',
  args: {
    where: 'LogWhereInput',
    orderBy: arg({ type: 'LogOrderByInput', list: true }),
    cursor: 'LogWhereUniqueInput',
    distinct: 'LogDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.log.count(args)
  },
})
module.exports = { LogFindCountQuery }
