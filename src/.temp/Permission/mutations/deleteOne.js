const { mutationField, arg } = require('@nexus/schema')

const PermissionDeleteOneMutation = mutationField('deleteOnePermission', {
  type: 'Permission',
  nullable: true,
  args: {
    where: arg({
      type: 'PermissionWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.permission.delete({
      where,
      ...select,
    })
  },
})
module.exports = { PermissionDeleteOneMutation }
