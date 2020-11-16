const { queryField, arg } = require('@nexus/schema')

const SettingsFindManyQuery = queryField('findManySettings', {
  type: 'Settings',
  list: [true],
  args: {
    where: 'SettingsWhereInput',
    orderBy: arg({ type: 'SettingsOrderByInput', list: true }),
    cursor: 'SettingsWhereUniqueInput',
    distinct: 'SettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.settings.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SettingsFindManyQuery }
