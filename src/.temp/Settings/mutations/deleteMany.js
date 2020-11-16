const { mutationField, arg } = require('@nexus/schema')

const SettingsDeleteManyMutation = mutationField('deleteManySettings', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SettingsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.settings.deleteMany({ where })
  },
})
module.exports = { SettingsDeleteManyMutation }
