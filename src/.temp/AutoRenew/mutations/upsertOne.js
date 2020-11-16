const { mutationField, arg } = require('@nexus/schema')

const AutoRenewUpsertOneMutation = mutationField('upsertOneAutoRenew', {
  type: 'AutoRenew',
  nullable: false,
  args: {
    where: arg({
      type: 'AutoRenewWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'AutoRenewCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'AutoRenewUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.autoRenew.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { AutoRenewUpsertOneMutation }
