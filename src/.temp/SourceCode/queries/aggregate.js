const { queryField, arg } = require('@nexus/schema')

const SourceCodeAggregateQuery = queryField('aggregateSourceCode', {
  type: 'AggregateSourceCode',
  nullable: true,
  args: {
    where: 'SourceCodeWhereInput',
    orderBy: arg({ type: 'SourceCodeOrderByInput', list: true }),
    cursor: 'SourceCodeWhereUniqueInput',
    distinct: 'SourceCodeDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sourceCode.aggregate({ ...args, ...select })
  },
})
module.exports = { SourceCodeAggregateQuery }
