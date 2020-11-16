const { mutationField, arg } = require('@nexus/schema')

const PermissionDeleteManyMutation = mutationField('deleteManyPermission', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PermissionWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.permission.deleteMany({ where })
  },
})
module.exports = { PermissionDeleteManyMutation }
