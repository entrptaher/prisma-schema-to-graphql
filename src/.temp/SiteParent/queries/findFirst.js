const { queryField, arg } = require('@nexus/schema')

const SiteParentFindFirstQuery = queryField('findFirstSiteParent', {
  type: 'SiteParent',
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
    return prisma.siteParent.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteParentFindFirstQuery }
