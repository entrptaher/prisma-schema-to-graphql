const { queryField, arg } = require('@nexus/schema')

const ProxyFindOneQuery = queryField('findOneProxy', {
  type: 'Proxy',
  nullable: true,
  args: {
    where: arg({
      type: 'ProxyWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.proxy.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { ProxyFindOneQuery }
