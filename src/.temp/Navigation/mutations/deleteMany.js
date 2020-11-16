const { mutationField, arg } = require('@nexus/schema')

const NavigationDeleteManyMutation = mutationField('deleteManyNavigation', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'NavigationWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.navigation.deleteMany({ where })
  },
})
module.exports = { NavigationDeleteManyMutation }
