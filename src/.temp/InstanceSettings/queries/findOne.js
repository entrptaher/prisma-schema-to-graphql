const { queryField, arg } = require('@nexus/schema')

const InstanceSettingsFindOneQuery = queryField('findOneInstanceSettings', {
  type: 'InstanceSettings',
  nullable: true,
  args: {
    where: arg({
      type: 'InstanceSettingsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.instanceSettings.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { InstanceSettingsFindOneQuery }
