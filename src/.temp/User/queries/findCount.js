const { queryField, arg } = require('@nexus/schema')

const UserFindCountQuery = queryField('findManyUserCount', {
  type: 'Int',
  args: {
    where: 'UserWhereInput',
    orderBy: arg({ type: 'UserOrderByInput', list: true }),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.count(args)
  },
})
module.exports = { UserFindCountQuery }
