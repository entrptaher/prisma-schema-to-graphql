const { queryField, arg } = require('@nexus/schema')

const InstanceSettingsFindCountQuery = queryField(
  'findManyInstanceSettingsCount',
  {
    type: 'Int',
    args: {
      where: 'InstanceSettingsWhereInput',
      orderBy: arg({ type: 'InstanceSettingsOrderByInput', list: true }),
      cursor: 'InstanceSettingsWhereUniqueInput',
      distinct: 'InstanceSettingsDistinctFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.instanceSettings.count(args)
    },
  },
)
module.exports = { InstanceSettingsFindCountQuery }
