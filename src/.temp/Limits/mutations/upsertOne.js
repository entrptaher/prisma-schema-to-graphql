const { mutationField, arg } = require('@nexus/schema')

const LimitsUpsertOneMutation = mutationField('upsertOneLimits', {
  type: 'Limits',
  nullable: false,
  args: {
    where: arg({
      type: 'LimitsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'LimitsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'LimitsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.limits.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { LimitsUpsertOneMutation }
