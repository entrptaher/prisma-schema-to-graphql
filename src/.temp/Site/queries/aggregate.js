const { queryField, arg } = require('@nexus/schema')

const SiteAggregateQuery = queryField('aggregateSite', {
  type: 'AggregateSite',
  nullable: true,
  args: {
    where: 'SiteWhereInput',
    orderBy: arg({ type: 'SiteOrderByInput', list: true }),
    cursor: 'SiteWhereUniqueInput',
    distinct: 'SiteDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.site.aggregate({ ...args, ...select })
  },
})
module.exports = { SiteAggregateQuery }
