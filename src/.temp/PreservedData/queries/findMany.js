const { queryField, arg } = require('@nexus/schema')

const PreservedDataFindManyQuery = queryField('findManyPreservedData', {
  type: 'PreservedData',
  list: [true],
  args: {
    where: 'PreservedDataWhereInput',
    orderBy: arg({ type: 'PreservedDataOrderByInput', list: true }),
    cursor: 'PreservedDataWhereUniqueInput',
    distinct: 'PreservedDataDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.preservedData.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { PreservedDataFindManyQuery }
