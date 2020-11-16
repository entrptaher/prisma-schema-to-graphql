const { queryField, arg } = require('@nexus/schema')

const SiteFindCountQuery = queryField('findManySiteCount', {
  type: 'Int',
  args: {
    where: 'SiteWhereInput',
    orderBy: arg({ type: 'SiteOrderByInput', list: true }),
    cursor: 'SiteWhereUniqueInput',
    distinct: 'SiteDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.site.count(args)
  },
})
module.exports = { SiteFindCountQuery }
