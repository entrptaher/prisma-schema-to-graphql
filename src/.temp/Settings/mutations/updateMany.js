const { mutationField, arg } = require('@nexus/schema')

const SettingsUpdateManyMutation = mutationField('updateManySettings', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SettingsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SettingsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.settings.updateMany(args)
  },
})
module.exports = { SettingsUpdateManyMutation }
