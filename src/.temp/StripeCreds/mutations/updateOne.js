const { mutationField, arg } = require('@nexus/schema')

const StripeCredsUpdateOneMutation = mutationField('updateOneStripeCreds', {
  type: 'StripeCreds',
  nullable: false,
  args: {
    where: arg({
      type: 'StripeCredsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'StripeCredsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.stripeCreds.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { StripeCredsUpdateOneMutation }
