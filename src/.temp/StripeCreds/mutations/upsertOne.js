const { mutationField, arg } = require('@nexus/schema')

const StripeCredsUpsertOneMutation = mutationField('upsertOneStripeCreds', {
  type: 'StripeCreds',
  nullable: false,
  args: {
    where: arg({
      type: 'StripeCredsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'StripeCredsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'StripeCredsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.stripeCreds.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { StripeCredsUpsertOneMutation }
