const { queryField, arg } = require('@nexus/schema')

const InstanceSettingsFindManyQuery = queryField('findManyInstanceSettings', {
  type: 'InstanceSettings',
  list: [true],
  args: {
    where: 'InstanceSettingsWhereInput',
    orderBy: arg({ type: 'InstanceSettingsOrderByInput', list: true }),
    cursor: 'InstanceSettingsWhereUniqueInput',
    distinct: 'InstanceSettingsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instanceSettings.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { InstanceSettingsFindManyQuery }
