const { queryField, arg } = require('@nexus/schema')

const PreservedDataFindFirstQuery = queryField('findFirstPreservedData', {
  type: 'PreservedData',
  nullable: true,
  args: {
    where: 'PreservedDataWhereInput',
    orderBy: arg({ type: 'PreservedDataOrderByInput', list: true }),
    cursor: 'PreservedDataWhereUniqueInput',
    distinct: 'PreservedDataDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.preservedData.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { PreservedDataFindFirstQuery }
