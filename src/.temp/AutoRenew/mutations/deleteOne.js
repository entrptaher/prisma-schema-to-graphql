const { mutationField, arg } = require('@nexus/schema')

const AutoRenewDeleteOneMutation = mutationField('deleteOneAutoRenew', {
  type: 'AutoRenew',
  nullable: true,
  args: {
    where: arg({
      type: 'AutoRenewWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.autoRenew.delete({
      where,
      ...select,
    })
  },
})
module.exports = { AutoRenewDeleteOneMutation }
