const { queryField, arg } = require('@nexus/schema')

const SiteParentAggregateQuery = queryField('aggregateSiteParent', {
  type: 'AggregateSiteParent',
  nullable: true,
  args: {
    where: 'SiteParentWhereInput',
    orderBy: arg({ type: 'SiteParentOrderByInput', list: true }),
    cursor: 'SiteParentWhereUniqueInput',
    distinct: 'SiteParentDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.siteParent.aggregate({ ...args, ...select })
  },
})
module.exports = { SiteParentAggregateQuery }
