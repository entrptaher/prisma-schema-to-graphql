const { queryField, arg } = require('@nexus/schema')

const CreditOfUserFindCountQuery = queryField('findManyCreditOfUserCount', {
  type: 'Int',
  args: {
    where: 'CreditOfUserWhereInput',
    orderBy: arg({ type: 'CreditOfUserOrderByInput', list: true }),
    cursor: 'CreditOfUserWhereUniqueInput',
    distinct: 'CreditOfUserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.creditOfUser.count(args)
  },
})
module.exports = { CreditOfUserFindCountQuery }
