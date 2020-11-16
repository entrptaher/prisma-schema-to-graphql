const { queryField, arg } = require('@nexus/schema')

const KeyFindManyQuery = queryField('findManyKey', {
  type: 'Key',
  list: [true],
  args: {
    where: 'KeyWhereInput',
    orderBy: arg({ type: 'KeyOrderByInput', list: true }),
    cursor: 'KeyWhereUniqueInput',
    distinct: 'KeyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.key.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { KeyFindManyQuery }
