const { queryField, arg } = require('@nexus/schema')

const InstanceSettingsAggregateQuery = queryField('aggregateInstanceSettings', {
  type: 'AggregateInstanceSettings',
  nullable: true,
  args: {
    where: 'InstanceSettingsWhereInput',
    orderBy: arg({ type: 'InstanceSettingsOrderByInput', list: true }),
    cursor: 'InstanceSettingsWhereUniqueInput',
    distinct: 'InstanceSettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instanceSettings.aggregate({ ...args, ...select })
  },
})
module.exports = { InstanceSettingsAggregateQuery }
