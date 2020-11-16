const { mutationField, arg } = require('@nexus/schema')

const UiSettingsUpdateOneMutation = mutationField('updateOneUiSettings', {
  type: 'UiSettings',
  nullable: false,
  args: {
    where: arg({
      type: 'UiSettingsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'UiSettingsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.uiSettings.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { UiSettingsUpdateOneMutation }
