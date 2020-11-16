const { queryField, arg } = require('@nexus/schema')

const UserFindManyQuery = queryField('findManyUser', {
  type: 'User',
  list: [true],
  args: {
    where: 'UserWhereInput',
    orderBy: arg({ type: 'UserOrderByInput', list: true }),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.user.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { UserFindManyQuery }
