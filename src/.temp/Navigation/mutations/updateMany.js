const { mutationField, arg } = require('@nexus/schema')

const NavigationUpdateManyMutation = mutationField('updateManyNavigation', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'NavigationWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'NavigationUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.navigation.updateMany(args)
  },
})
module.exports = { NavigationUpdateManyMutation }
