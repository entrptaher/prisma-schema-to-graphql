const { mutationField, arg } = require('@nexus/schema')

const ProxyUpsertOneMutation = mutationField('upsertOneProxy', {
  type: 'Proxy',
  nullable: false,
  args: {
    where: arg({
      type: 'ProxyWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'ProxyCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'ProxyUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.proxy.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { ProxyUpsertOneMutation }
