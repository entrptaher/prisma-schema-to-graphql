const { queryField, arg } = require('@nexus/schema')

const GoogleAuthAggregateQuery = queryField('aggregateGoogleAuth', {
  type: 'AggregateGoogleAuth',
  nullable: true,
  args: {
    where: 'GoogleAuthWhereInput',
    orderBy: arg({ type: 'GoogleAuthOrderByInput', list: true }),
    cursor: 'GoogleAuthWhereUniqueInput',
    distinct: 'GoogleAuthDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleAuth.aggregate({ ...args, ...select })
  },
})
module.exports = { GoogleAuthAggregateQuery }
