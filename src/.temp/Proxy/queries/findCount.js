const { queryField, arg } = require('@nexus/schema')

const ProxyFindCountQuery = queryField('findManyProxyCount', {
  type: 'Int',
  args: {
    where: 'ProxyWhereInput',
    orderBy: arg({ type: 'ProxyOrderByInput', list: true }),
    cursor: 'ProxyWhereUniqueInput',
    distinct: 'ProxyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.proxy.count(args)
  },
})
module.exports = { ProxyFindCountQuery }
