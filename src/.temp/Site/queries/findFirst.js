const { queryField, arg } = require('@nexus/schema')

const SiteFindFirstQuery = queryField('findFirstSite', {
  type: 'Site',
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
    return prisma.site.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteFindFirstQuery }
