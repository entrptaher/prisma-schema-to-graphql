const { queryField, arg } = require('@nexus/schema')

const PreservedDataFindCountQuery = queryField('findManyPreservedDataCount', {
  type: 'Int',
  args: {
    where: 'PreservedDataWhereInput',
    orderBy: arg({ type: 'PreservedDataOrderByInput', list: true }),
    cursor: 'PreservedDataWhereUniqueInput',
    distinct: 'PreservedDataDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.preservedData.count(args)
  },
})
module.exports = { PreservedDataFindCountQuery }
