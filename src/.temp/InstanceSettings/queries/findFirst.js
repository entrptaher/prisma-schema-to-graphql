const { queryField, arg } = require('@nexus/schema')

const InstanceSettingsFindFirstQuery = queryField('findFirstInstanceSettings', {
  type: 'InstanceSettings',
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
    return prisma.instanceSettings.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { InstanceSettingsFindFirstQuery }
