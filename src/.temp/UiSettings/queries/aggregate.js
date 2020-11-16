const { queryField, arg } = require('@nexus/schema')

const UiSettingsAggregateQuery = queryField('aggregateUiSettings', {
  type: 'AggregateUiSettings',
  nullable: true,
  args: {
    where: 'UiSettingsWhereInput',
    orderBy: arg({ type: 'UiSettingsOrderByInput', list: true }),
    cursor: 'UiSettingsWhereUniqueInput',
    distinct: 'UiSettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.uiSettings.aggregate({ ...args, ...select })
  },
})
module.exports = { UiSettingsAggregateQuery }
