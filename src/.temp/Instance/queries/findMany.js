const { queryField, arg } = require('@nexus/schema')

const InstanceFindManyQuery = queryField('findManyInstance', {
  type: 'Instance',
  list: [true],
  args: {
    where: 'InstanceWhereInput',
    orderBy: arg({ type: 'InstanceOrderByInput', list: true }),
    cursor: 'InstanceWhereUniqueInput',
    distinct: 'InstanceDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instance.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { InstanceFindManyQuery }
