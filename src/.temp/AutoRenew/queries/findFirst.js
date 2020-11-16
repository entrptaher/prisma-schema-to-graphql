const { queryField, arg } = require('@nexus/schema')

const AutoRenewFindFirstQuery = queryField('findFirstAutoRenew', {
  type: 'AutoRenew',
  nullable: true,
  args: {
    where: 'AutoRenewWhereInput',
    orderBy: arg({ type: 'AutoRenewOrderByInput', list: true }),
    cursor: 'AutoRenewWhereUniqueInput',
    distinct: 'AutoRenewDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.autoRenew.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { AutoRenewFindFirstQuery }
