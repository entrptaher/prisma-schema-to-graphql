const { mutationField, arg } = require('@nexus/schema')

const OrderUpdateOneMutation = mutationField('updateOneOrder', {
  type: 'Order',
  nullable: false,
  args: {
    where: arg({
      type: 'OrderWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'OrderUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.order.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { OrderUpdateOneMutation }
