const { mutationField, arg } = require('@nexus/schema')

const UiSettingsCreateOneMutation = mutationField('createOneUiSettings', {
  type: 'UiSettings',
  nullable: false,
  args: {
    data: arg({
      type: 'UiSettingsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.uiSettings.create({
      data,
      ...select,
    })
  },
})
module.exports = { UiSettingsCreateOneMutation }
