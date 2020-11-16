const { queryField, arg } = require('@nexus/schema')

const NavigationFindFirstQuery = queryField('findFirstNavigation', {
  type: 'Navigation',
  nullable: true,
  args: {
    where: 'NavigationWhereInput',
    orderBy: arg({ type: 'NavigationOrderByInput', list: true }),
    cursor: 'NavigationWhereUniqueInput',
    distinct: 'NavigationDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.navigation.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { NavigationFindFirstQuery }
