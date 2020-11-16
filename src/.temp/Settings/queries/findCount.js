const { queryField, arg } = require('@nexus/schema')

const SettingsFindCountQuery = queryField('findManySettingsCount', {
  type: 'Int',
  args: {
    where: 'SettingsWhereInput',
    orderBy: arg({ type: 'SettingsOrderByInput', list: true }),
    cursor: 'SettingsWhereUniqueInput',
    distinct: 'SettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.settings.count(args)
  },
})
module.exports = { SettingsFindCountQuery }
