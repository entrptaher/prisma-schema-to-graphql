const { mutationField, arg } = require('@nexus/schema')

const NavigationDeleteOneMutation = mutationField('deleteOneNavigation', {
  type: 'Navigation',
  nullable: true,
  args: {
    where: arg({
      type: 'NavigationWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.navigation.delete({
      where,
      ...select,
    })
  },
})
module.exports = { NavigationDeleteOneMutation }
