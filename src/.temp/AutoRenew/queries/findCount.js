const { queryField, arg } = require('@nexus/schema')

const AutoRenewFindCountQuery = queryField('findManyAutoRenewCount', {
  type: 'Int',
  args: {
    where: 'AutoRenewWhereInput',
    orderBy: arg({ type: 'AutoRenewOrderByInput', list: true }),
    cursor: 'AutoRenewWhereUniqueInput',
    distinct: 'AutoRenewDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.autoRenew.count(args)
  },
})
module.exports = { AutoRenewFindCountQuery }
