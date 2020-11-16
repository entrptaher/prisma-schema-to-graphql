const { queryField, arg } = require('@nexus/schema')

const SiteStateAggregateQuery = queryField('aggregateSiteState', {
  type: 'AggregateSiteState',
  nullable: true,
  args: {
    where: 'SiteStateWhereInput',
    orderBy: arg({ type: 'SiteStateOrderByInput', list: true }),
    cursor: 'SiteStateWhereUniqueInput',
    distinct: 'SiteStateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.siteState.aggregate({ ...args, ...select })
  },
})
module.exports = { SiteStateAggregateQuery }
