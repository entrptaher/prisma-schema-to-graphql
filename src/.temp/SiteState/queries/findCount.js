const { queryField, arg } = require('@nexus/schema')

const SiteStateFindCountQuery = queryField('findManySiteStateCount', {
  type: 'Int',
  args: {
    where: 'SiteStateWhereInput',
    orderBy: arg({ type: 'SiteStateOrderByInput', list: true }),
    cursor: 'SiteStateWhereUniqueInput',
    distinct: 'SiteStateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.siteState.count(args)
  },
})
module.exports = { SiteStateFindCountQuery }
