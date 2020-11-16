const { mutationField, arg } = require('@nexus/schema')

const StripeCredsDeleteOneMutation = mutationField('deleteOneStripeCreds', {
  type: 'StripeCreds',
  nullable: true,
  args: {
    where: arg({
      type: 'StripeCredsWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.stripeCreds.delete({
      where,
      ...select,
    })
  },
})
module.exports = { StripeCredsDeleteOneMutation }
