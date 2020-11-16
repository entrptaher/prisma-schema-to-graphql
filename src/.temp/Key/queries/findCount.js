const { queryField, arg } = require('@nexus/schema')

const KeyFindCountQuery = queryField('findManyKeyCount', {
  type: 'Int',
  args: {
    where: 'KeyWhereInput',
    orderBy: arg({ type: 'KeyOrderByInput', list: true }),
    cursor: 'KeyWhereUniqueInput',
    distinct: 'KeyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.key.count(args)
  },
})
module.exports = { KeyFindCountQuery }
