const { queryField, arg } = require('@nexus/schema')

const UiSettingsFindFirstQuery = queryField('findFirstUiSettings', {
  type: 'UiSettings',
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
    return prisma.uiSettings.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { UiSettingsFindFirstQuery }
