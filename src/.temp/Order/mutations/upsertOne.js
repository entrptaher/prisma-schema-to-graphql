const { mutationField, arg } = require('@nexus/schema')

const OrderUpsertOneMutation = mutationField('upsertOneOrder', {
  type: 'Order',
  nullable: false,
  args: {
    where: arg({
      type: 'OrderWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'OrderCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'OrderUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.order.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { OrderUpsertOneMutation }
