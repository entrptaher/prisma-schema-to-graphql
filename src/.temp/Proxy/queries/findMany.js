const { queryField, arg } = require('@nexus/schema')

const ProxyFindManyQuery = queryField('findManyProxy', {
  type: 'Proxy',
  list: [true],
  args: {
    where: 'ProxyWhereInput',
    orderBy: arg({ type: 'ProxyOrderByInput', list: true }),
    cursor: 'ProxyWhereUniqueInput',
    distinct: 'ProxyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.proxy.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { ProxyFindManyQuery }
