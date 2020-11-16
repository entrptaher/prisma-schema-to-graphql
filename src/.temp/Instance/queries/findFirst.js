const { queryField, arg } = require('@nexus/schema')

const InstanceFindFirstQuery = queryField('findFirstInstance', {
  type: 'Instance',
  nullable: true,
  args: {
    where: 'InstanceWhereInput',
    orderBy: arg({ type: 'InstanceOrderByInput', list: true }),
    cursor: 'InstanceWhereUniqueInput',
    distinct: 'InstanceDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instance.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { InstanceFindFirstQuery }
