const { mutationField, arg } = require('@nexus/schema')

const StripeCredsUpdateManyMutation = mutationField('updateManyStripeCreds', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'StripeCredsWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'StripeCredsUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.stripeCreds.updateMany(args)
  },
})
module.exports = { StripeCredsUpdateManyMutation }
