const { mutationField, arg } = require('@nexus/schema')

const OrderDeleteOneMutation = mutationField('deleteOneOrder', {
  type: 'Order',
  nullable: true,
  args: {
    where: arg({
      type: 'OrderWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.order.delete({
      where,
      ...select,
    })
  },
})
module.exports = { OrderDeleteOneMutation }
