const { queryField, arg } = require('@nexus/schema')

const ListFindFirstQuery = queryField('findFirstList', {
  type: 'List',
  nullable: true,
  args: {
    where: 'ListWhereInput',
    orderBy: arg({ type: 'ListOrderByInput', list: true }),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { ListFindFirstQuery }
