const { queryField, arg } = require('@nexus/schema')

const CreditOfUserFindFirstQuery = queryField('findFirstCreditOfUser', {
  type: 'CreditOfUser',
  nullable: true,
  args: {
    where: 'CreditOfUserWhereInput',
    orderBy: arg({ type: 'CreditOfUserOrderByInput', list: true }),
    cursor: 'CreditOfUserWhereUniqueInput',
    distinct: 'CreditOfUserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfUser.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { CreditOfUserFindFirstQuery }
