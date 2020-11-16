const { queryField, arg } = require('@nexus/schema')

const InstanceAggregateQuery = queryField('aggregateInstance', {
  type: 'AggregateInstance',
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
    return prisma.instance.aggregate({ ...args, ...select })
  },
})
module.exports = { InstanceAggregateQuery }
