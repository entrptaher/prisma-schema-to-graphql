const { queryField, arg } = require('@nexus/schema')

const CreditOfInstanceFindFirstQuery = queryField('findFirstCreditOfInstance', {
  type: 'CreditOfInstance',
  nullable: true,
  args: {
    where: 'CreditOfInstanceWhereInput',
    orderBy: arg({ type: 'CreditOfInstanceOrderByInput', list: true }),
    cursor: 'CreditOfInstanceWhereUniqueInput',
    distinct: 'CreditOfInstanceDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfInstance.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { CreditOfInstanceFindFirstQuery }
