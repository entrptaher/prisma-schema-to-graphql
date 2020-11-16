const { queryField, arg } = require('@nexus/schema')

const CreditOfInstanceFindCountQuery = queryField(
  'findManyCreditOfInstanceCount',
  {
    type: 'Int',
    args: {
      where: 'CreditOfInstanceWhereInput',
      orderBy: arg({ type: 'CreditOfInstanceOrderByInput', list: true }),
      cursor: 'CreditOfInstanceWhereUniqueInput',
      distinct: 'CreditOfInstanceDistinctFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.creditOfInstance.count(args)
    },
  },
)
module.exports = { CreditOfInstanceFindCountQuery }
