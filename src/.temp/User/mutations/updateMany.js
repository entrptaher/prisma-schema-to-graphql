const { mutationField, arg } = require('@nexus/schema')

const UserUpdateManyMutation = mutationField('updateManyUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UserWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'UserUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.updateMany(args)
  },
})
module.exports = { UserUpdateManyMutation }
