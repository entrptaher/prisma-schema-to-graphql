const { queryField, arg } = require('@nexus/schema')

const RetryFindOneQuery = queryField('findOneRetry', {
  type: 'Retry',
  nullable: true,
  args: {
    where: arg({
      type: 'RetryWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.retry.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { RetryFindOneQuery }
