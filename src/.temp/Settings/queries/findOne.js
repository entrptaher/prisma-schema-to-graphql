const { queryField, arg } = require('@nexus/schema')

const SettingsFindOneQuery = queryField('findOneSettings', {
  type: 'Settings',
  nullable: true,
  args: {
    where: arg({
      type: 'SettingsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.settings.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SettingsFindOneQuery }
