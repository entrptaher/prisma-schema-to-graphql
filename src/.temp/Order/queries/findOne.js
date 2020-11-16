const { queryField, arg } = require('@nexus/schema')

const OrderFindOneQuery = queryField('findOneOrder', {
  type: 'Order',
  nullable: true,
  args: {
    where: arg({
      type: 'OrderWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.order.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { OrderFindOneQuery }
