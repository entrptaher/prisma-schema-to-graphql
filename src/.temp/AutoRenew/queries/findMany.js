const { queryField, arg } = require('@nexus/schema')

const AutoRenewFindManyQuery = queryField('findManyAutoRenew', {
  type: 'AutoRenew',
  list: [true],
  args: {
    where: 'AutoRenewWhereInput',
    orderBy: arg({ type: 'AutoRenewOrderByInput', list: true }),
    cursor: 'AutoRenewWhereUniqueInput',
    distinct: 'AutoRenewDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.autoRenew.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { AutoRenewFindManyQuery }
