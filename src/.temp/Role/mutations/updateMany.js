const { mutationField, arg } = require('@nexus/schema')

const RoleUpdateManyMutation = mutationField('updateManyRole', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'RoleWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'RoleUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.role.updateMany(args)
  },
})
module.exports = { RoleUpdateManyMutation }
