const { mutationField, arg } = require('@nexus/schema')

const RetryDeleteManyMutation = mutationField('deleteManyRetry', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'RetryWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.retry.deleteMany({ where })
  },
})
module.exports = { RetryDeleteManyMutation }
