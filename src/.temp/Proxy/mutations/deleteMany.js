const { mutationField, arg } = require('@nexus/schema')

const ProxyDeleteManyMutation = mutationField('deleteManyProxy', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ProxyWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.proxy.deleteMany({ where })
  },
})
module.exports = { ProxyDeleteManyMutation }
