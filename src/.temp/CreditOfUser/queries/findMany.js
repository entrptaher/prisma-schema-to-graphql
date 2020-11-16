const { queryField, arg } = require('@nexus/schema')

const CreditOfUserFindManyQuery = queryField('findManyCreditOfUser', {
  type: 'CreditOfUser',
  list: [true],
  args: {
    where: 'CreditOfUserWhereInput',
    orderBy: arg({ type: 'CreditOfUserOrderByInput', list: true }),
    cursor: 'CreditOfUserWhereUniqueInput',
    distinct: 'CreditOfUserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfUser.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { CreditOfUserFindManyQuery }
