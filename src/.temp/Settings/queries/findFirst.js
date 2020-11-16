const { queryField, arg } = require('@nexus/schema')

const SettingsFindFirstQuery = queryField('findFirstSettings', {
  type: 'Settings',
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
    return prisma.settings.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SettingsFindFirstQuery }
