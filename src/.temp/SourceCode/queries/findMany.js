const { queryField, arg } = require('@nexus/schema')

const SourceCodeFindManyQuery = queryField('findManySourceCode', {
  type: 'SourceCode',
  list: [true],
  args: {
    where: 'SourceCodeWhereInput',
    orderBy: arg({ type: 'SourceCodeOrderByInput', list: true }),
    cursor: 'SourceCodeWhereUniqueInput',
    distinct: 'SourceCodeDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sourceCode.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { SourceCodeFindManyQuery }
