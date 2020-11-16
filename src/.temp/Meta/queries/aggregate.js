const { queryField, arg } = require('@nexus/schema')

const MetaAggregateQuery = queryField('aggregateMeta', {
  type: 'AggregateMeta',
  nullable: true,
  args: {
    where: 'MetaWhereInput',
    orderBy: arg({ type: 'MetaOrderByInput', list: true }),
    cursor: 'MetaWhereUniqueInput',
    distinct: 'MetaDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meta.aggregate({ ...args, ...select })
  },
})
module.exports = { MetaAggregateQuery }
