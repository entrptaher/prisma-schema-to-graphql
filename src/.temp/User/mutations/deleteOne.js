const { mutationField, arg } = require('@nexus/schema')

const UserDeleteOneMutation = mutationField('deleteOneUser', {
  type: 'User',
  nullable: true,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.user.delete({
      where,
      ...select,
    })
  },
})
module.exports = { UserDeleteOneMutation }
