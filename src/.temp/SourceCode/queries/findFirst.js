const { queryField, arg } = require('@nexus/schema')

const SourceCodeFindFirstQuery = queryField('findFirstSourceCode', {
  type: 'SourceCode',
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
    return prisma.sourceCode.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { SourceCodeFindFirstQuery }
