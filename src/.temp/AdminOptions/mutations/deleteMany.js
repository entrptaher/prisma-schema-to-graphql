const { mutationField, arg } = require('@nexus/schema')

const AdminOptionsDeleteManyMutation = mutationField('deleteManyAdminOptions', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'AdminOptionsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.adminOptions.deleteMany({ where })
  },
})
module.exports = { AdminOptionsDeleteManyMutation }
