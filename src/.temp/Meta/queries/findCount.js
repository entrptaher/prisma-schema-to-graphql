const { queryField, arg } = require('@nexus/schema')

const MetaFindCountQuery = queryField('findManyMetaCount', {
  type: 'Int',
  args: {
    where: 'MetaWhereInput',
    orderBy: arg({ type: 'MetaOrderByInput', list: true }),
    cursor: 'MetaWhereUniqueInput',
    distinct: 'MetaDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.meta.count(args)
  },
})
module.exports = { MetaFindCountQuery }
