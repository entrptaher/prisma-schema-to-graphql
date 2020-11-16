const { mutationField, arg } = require('@nexus/schema')

const RetryDeleteOneMutation = mutationField('deleteOneRetry', {
  type: 'Retry',
  nullable: true,
  args: {
    where: arg({
      type: 'RetryWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.retry.delete({
      where,
      ...select,
    })
  },
})
module.exports = { RetryDeleteOneMutation }
