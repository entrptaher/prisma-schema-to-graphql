const { mutationField, arg } = require('@nexus/schema')

const ProxyDeleteOneMutation = mutationField('deleteOneProxy', {
  type: 'Proxy',
  nullable: true,
  args: {
    where: arg({
      type: 'ProxyWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.proxy.delete({
      where,
      ...select,
    })
  },
})
module.exports = { ProxyDeleteOneMutation }
