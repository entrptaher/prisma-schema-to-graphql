const { queryField, arg } = require('@nexus/schema')

const UiSettingsFindCountQuery = queryField('findManyUiSettingsCount', {
  type: 'Int',
  args: {
    where: 'UiSettingsWhereInput',
    orderBy: arg({ type: 'UiSettingsOrderByInput', list: true }),
    cursor: 'UiSettingsWhereUniqueInput',
    distinct: 'UiSettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.uiSettings.count(args)
  },
})
module.exports = { UiSettingsFindCountQuery }
