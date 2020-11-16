const { mutationField, arg } = require('@nexus/schema')

const ProxyCreateOneMutation = mutationField('createOneProxy', {
  type: 'Proxy',
  nullable: false,
  args: {
    data: arg({
      type: 'ProxyCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.proxy.create({
      data,
      ...select,
    })
  },
})
module.exports = { ProxyCreateOneMutation }
