const { mutationField, arg } = require('@nexus/schema')

const OrderUpdateManyMutation = mutationField('updateManyOrder', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'OrderWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'OrderUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.order.updateMany(args)
  },
})
module.exports = { OrderUpdateManyMutation }
