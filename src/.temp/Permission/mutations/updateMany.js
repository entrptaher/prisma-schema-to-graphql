const { mutationField, arg } = require('@nexus/schema')

const PermissionUpdateManyMutation = mutationField('updateManyPermission', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PermissionWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'PermissionUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.permission.updateMany(args)
  },
})
module.exports = { PermissionUpdateManyMutation }
