const { mutationField, arg } = require('@nexus/schema')

const OrderDeleteManyMutation = mutationField('deleteManyOrder', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'OrderWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.order.deleteMany({ where })
  },
})
module.exports = { OrderDeleteManyMutation }
