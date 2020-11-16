const { mutationField, arg } = require('@nexus/schema')

const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UserWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.user.deleteMany({ where })
  },
})
module.exports = { UserDeleteManyMutation }
