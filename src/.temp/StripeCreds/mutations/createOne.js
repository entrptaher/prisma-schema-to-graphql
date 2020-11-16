const { mutationField, arg } = require('@nexus/schema')

const StripeCredsCreateOneMutation = mutationField('createOneStripeCreds', {
  type: 'StripeCreds',
  nullable: false,
  args: {
    data: arg({
      type: 'StripeCredsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.stripeCreds.create({
      data,
      ...select,
    })
  },
})
module.exports = { StripeCredsCreateOneMutation }
