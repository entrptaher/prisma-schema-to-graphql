const { mutationField, arg } = require('@nexus/schema')

const OrderCreateOneMutation = mutationField('createOneOrder', {
  type: 'Order',
  nullable: false,
  args: {
    data: arg({
      type: 'OrderCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.order.create({
      data,
      ...select,
    })
  },
})
module.exports = { OrderCreateOneMutation }
