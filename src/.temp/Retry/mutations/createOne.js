const { mutationField, arg } = require('@nexus/schema')

const RetryCreateOneMutation = mutationField('createOneRetry', {
  type: 'Retry',
  nullable: false,
  args: {
    data: arg({
      type: 'RetryCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.retry.create({
      data,
      ...select,
    })
  },
})
module.exports = { RetryCreateOneMutation }
