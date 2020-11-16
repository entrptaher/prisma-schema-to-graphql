const { queryField, arg } = require('@nexus/schema')

const SiteParentFindCountQuery = queryField('findManySiteParentCount', {
  type: 'Int',
  args: {
    where: 'SiteParentWhereInput',
    orderBy: arg({ type: 'SiteParentOrderByInput', list: true }),
    cursor: 'SiteParentWhereUniqueInput',
    distinct: 'SiteParentDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.siteParent.count(args)
  },
})
module.exports = { SiteParentFindCountQuery }
