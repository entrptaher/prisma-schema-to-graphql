const { queryField, arg } = require('@nexus/schema')

const SourceCodeFindCountQuery = queryField('findManySourceCodeCount', {
  type: 'Int',
  args: {
    where: 'SourceCodeWhereInput',
    orderBy: arg({ type: 'SourceCodeOrderByInput', list: true }),
    cursor: 'SourceCodeWhereUniqueInput',
    distinct: 'SourceCodeDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sourceCode.count(args)
  },
})
module.exports = { SourceCodeFindCountQuery }
