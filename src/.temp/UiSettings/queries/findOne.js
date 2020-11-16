const { queryField, arg } = require('@nexus/schema')

const UiSettingsFindOneQuery = queryField('findOneUiSettings', {
  type: 'UiSettings',
  nullable: true,
  args: {
    where: arg({
      type: 'UiSettingsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.uiSettings.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { UiSettingsFindOneQuery }
