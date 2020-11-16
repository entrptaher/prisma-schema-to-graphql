const { mutationField, arg } = require('@nexus/schema')

const RetryUpdateOneMutation = mutationField('updateOneRetry', {
  type: 'Retry',
  nullable: false,
  args: {
    where: arg({
      type: 'RetryWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'RetryUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.retry.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { RetryUpdateOneMutation }
