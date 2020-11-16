const { queryField, arg } = require('@nexus/schema')

const SettingsAggregateQuery = queryField('aggregateSettings', {
  type: 'AggregateSettings',
  nullable: true,
  args: {
    where: 'SettingsWhereInput',
    orderBy: arg({ type: 'SettingsOrderByInput', list: true }),
    cursor: 'SettingsWhereUniqueInput',
    distinct: 'SettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.settings.aggregate({ ...args, ...select })
  },
})
module.exports = { SettingsAggregateQuery }
