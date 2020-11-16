const { mutationField, arg } = require('@nexus/schema')

const RetryUpsertOneMutation = mutationField('upsertOneRetry', {
  type: 'Retry',
  nullable: false,
  args: {
    where: arg({
      type: 'RetryWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'RetryCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'RetryUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.retry.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { RetryUpsertOneMutation }
