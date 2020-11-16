const { mutationField, arg } = require('@nexus/schema')

const StripeCredsDeleteManyMutation = mutationField('deleteManyStripeCreds', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'StripeCredsWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.stripeCreds.deleteMany({ where })
  },
})
module.exports = { StripeCredsDeleteManyMutation }
