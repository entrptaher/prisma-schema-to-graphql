const { queryField, arg } = require('@nexus/schema')

const SiteStateFindManyQuery = queryField('findManySiteState', {
  type: 'SiteState',
  list: [true],
  args: {
    where: 'SiteStateWhereInput',
    orderBy: arg({ type: 'SiteStateOrderByInput', list: true }),
    cursor: 'SiteStateWhereUniqueInput',
    distinct: 'SiteStateDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.siteState.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SiteStateFindManyQuery }
