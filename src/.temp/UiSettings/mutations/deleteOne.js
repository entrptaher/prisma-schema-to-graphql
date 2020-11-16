const { mutationField, arg } = require('@nexus/schema')

const UiSettingsDeleteOneMutation = mutationField('deleteOneUiSettings', {
  type: 'UiSettings',
  nullable: true,
  args: {
    where: arg({
      type: 'UiSettingsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.uiSettings.delete({
      where,
      ...select,
    })
  },
})
module.exports = { UiSettingsDeleteOneMutation }
