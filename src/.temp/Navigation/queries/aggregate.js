const { queryField, arg } = require('@nexus/schema')

const NavigationAggregateQuery = queryField('aggregateNavigation', {
  type: 'AggregateNavigation',
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
    return prisma.navigation.aggregate({ ...args, ...select })
  },
})
module.exports = { NavigationAggregateQuery }
