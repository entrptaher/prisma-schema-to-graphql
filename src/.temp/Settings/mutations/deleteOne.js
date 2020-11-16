const { mutationField, arg } = require('@nexus/schema')

const SettingsDeleteOneMutation = mutationField('deleteOneSettings', {
  type: 'Settings',
  nullable: true,
  args: {
    where: arg({
      type: 'SettingsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.settings.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SettingsDeleteOneMutation }
