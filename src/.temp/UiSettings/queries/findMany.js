const { queryField, arg } = require('@nexus/schema')

const UiSettingsFindManyQuery = queryField('findManyUiSettings', {
  type: 'UiSettings',
  list: [true],
  args: {
    where: 'UiSettingsWhereInput',
    orderBy: arg({ type: 'UiSettingsOrderByInput', list: true }),
    cursor: 'UiSettingsWhereUniqueInput',
    distinct: 'UiSettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.uiSettings.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { UiSettingsFindManyQuery }
