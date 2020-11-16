const { queryField, arg } = require('@nexus/schema')

const NavigationFindManyQuery = queryField('findManyNavigation', {
  type: 'Navigation',
  list: [true],
  args: {
    where: 'NavigationWhereInput',
    orderBy: arg({ type: 'NavigationOrderByInput', list: true }),
    cursor: 'NavigationWhereUniqueInput',
    distinct: 'NavigationDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.navigation.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { NavigationFindManyQuery }
