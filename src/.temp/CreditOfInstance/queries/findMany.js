const { queryField, arg } = require('@nexus/schema')

const CreditOfInstanceFindManyQuery = queryField('findManyCreditOfInstance', {
  type: 'CreditOfInstance',
  list: [true],
  args: {
    where: 'CreditOfInstanceWhereInput',
    orderBy: arg({ type: 'CreditOfInstanceOrderByInput', list: true }),
    cursor: 'CreditOfInstanceWhereUniqueInput',
    distinct: 'CreditOfInstanceDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.creditOfInstance.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { CreditOfInstanceFindManyQuery }
