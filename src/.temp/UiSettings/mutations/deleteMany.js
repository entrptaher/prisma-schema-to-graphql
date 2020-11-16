const { mutationField, arg } = require('@nexus/schema')

const UiSettingsDeleteManyMutation = mutationField('deleteManyUiSettings', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UiSettingsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.uiSettings.deleteMany({ where })
  },
})
module.exports = { UiSettingsDeleteManyMutation }
