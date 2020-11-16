const { mutationField, arg } = require('@nexus/schema')

const UiSettingsUpdateManyMutation = mutationField('updateManyUiSettings', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UiSettingsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'UiSettingsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.uiSettings.updateMany(args)
  },
})
module.exports = { UiSettingsUpdateManyMutation }
