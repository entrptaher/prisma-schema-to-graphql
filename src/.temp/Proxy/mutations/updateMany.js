const { mutationField, arg } = require('@nexus/schema')

const ProxyUpdateManyMutation = mutationField('updateManyProxy', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ProxyWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'ProxyUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.proxy.updateMany(args)
  },
})
module.exports = { ProxyUpdateManyMutation }
