const { mutationField, arg } = require('@nexus/schema')

const AutoRenewDeleteManyMutation = mutationField('deleteManyAutoRenew', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'AutoRenewWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.autoRenew.deleteMany({ where })
  },
})
module.exports = { AutoRenewDeleteManyMutation }
