const { mutationField, arg } = require('@nexus/schema')

const AdminOptionsUpdateManyMutation = mutationField('updateManyAdminOptions', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'AdminOptionsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'AdminOptionsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.adminOptions.updateMany(args)
  },
})
module.exports = { AdminOptionsUpdateManyMutation }
