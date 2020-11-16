const { mutationField, arg } = require('@nexus/schema')

const RoleDeleteManyMutation = mutationField('deleteManyRole', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'RoleWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.role.deleteMany({ where })
  },
})
module.exports = { RoleDeleteManyMutation }
