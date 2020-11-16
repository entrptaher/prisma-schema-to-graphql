const { queryField, arg } = require('@nexus/schema')

const ListFindManyQuery = queryField('findManyList', {
  type: 'List',
  list: [true],
  args: {
    where: 'ListWhereInput',
    orderBy: arg({ type: 'ListOrderByInput', list: true }),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { ListFindManyQuery }
