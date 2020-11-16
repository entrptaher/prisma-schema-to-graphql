const { queryField, arg } = require('@nexus/schema')

const ProxyFindFirstQuery = queryField('findFirstProxy', {
  type: 'Proxy',
  nullable: true,
  args: {
    where: 'ProxyWhereInput',
    orderBy: arg({ type: 'ProxyOrderByInput', list: true }),
    cursor: 'ProxyWhereUniqueInput',
    distinct: 'ProxyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.proxy.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { ProxyFindFirstQuery }
