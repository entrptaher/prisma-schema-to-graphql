const { mutationField, arg } = require('@nexus/schema')

const AdminOptionsDeleteOneMutation = mutationField('deleteOneAdminOptions', {
  type: 'AdminOptions',
  nullable: true,
  args: {
    where: arg({
      type: 'AdminOptionsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.adminOptions.delete({
      where,
      ...select,
    })
  },
})
module.exports = { AdminOptionsDeleteOneMutation }
