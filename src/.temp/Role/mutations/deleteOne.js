const { mutationField, arg } = require('@nexus/schema')

const RoleDeleteOneMutation = mutationField('deleteOneRole', {
  type: 'Role',
  nullable: true,
  args: {
    where: arg({
      type: 'RoleWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.role.delete({
      where,
      ...select,
    })
  },
})
module.exports = { RoleDeleteOneMutation }
