const { mutationField, arg } = require('@nexus/schema')

const ProxyUpdateOneMutation = mutationField('updateOneProxy', {
  type: 'Proxy',
  nullable: false,
  args: {
    where: arg({
      type: 'ProxyWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'ProxyUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.proxy.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { ProxyUpdateOneMutation }
