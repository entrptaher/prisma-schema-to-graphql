const { queryField, arg } = require('@nexus/schema')

const SiteStateFindFirstQuery = queryField('findFirstSiteState', {
  type: 'SiteState',
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
    return prisma.siteState.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteStateFindFirstQuery }
