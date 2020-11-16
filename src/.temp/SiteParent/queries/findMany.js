const { queryField, arg } = require('@nexus/schema')

const SiteParentFindManyQuery = queryField('findManySiteParent', {
  type: 'SiteParent',
  list: [true],
  args: {
    where: 'SiteParentWhereInput',
    orderBy: arg({ type: 'SiteParentOrderByInput', list: true }),
    cursor: 'SiteParentWhereUniqueInput',
    distinct: 'SiteParentDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.siteParent.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteParentFindManyQuery }
