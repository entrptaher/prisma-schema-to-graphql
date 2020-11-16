const { mutationField, arg } = require('@nexus/schema')

const AutoRenewUpdateManyMutation = mutationField('updateManyAutoRenew', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'AutoRenewWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'AutoRenewUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.autoRenew.updateMany(args)
  },
})
module.exports = { AutoRenewUpdateManyMutation }
