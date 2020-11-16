const { mutationField, arg } = require('@nexus/schema')

const RetryUpdateManyMutation = mutationField('updateManyRetry', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'RetryWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'RetryUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.retry.updateMany(args)
  },
})
module.exports = { RetryUpdateManyMutation }
