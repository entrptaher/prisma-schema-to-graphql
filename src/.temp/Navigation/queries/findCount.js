const { queryField, arg } = require('@nexus/schema')

const NavigationFindCountQuery = queryField('findManyNavigationCount', {
  type: 'Int',
  args: {
    where: 'NavigationWhereInput',
    orderBy: arg({ type: 'NavigationOrderByInput', list: true }),
    cursor: 'NavigationWhereUniqueInput',
    distinct: 'NavigationDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.navigation.count(args)
  },
})
module.exports = { NavigationFindCountQuery }
