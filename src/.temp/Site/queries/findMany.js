const { queryField, arg } = require('@nexus/schema')

const SiteFindManyQuery = queryField('findManySite', {
  type: 'Site',
  list: [true],
  args: {
    where: 'SiteWhereInput',
    orderBy: arg({ type: 'SiteOrderByInput', list: true }),
    cursor: 'SiteWhereUniqueInput',
    distinct: 'SiteDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.site.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteFindManyQuery }
