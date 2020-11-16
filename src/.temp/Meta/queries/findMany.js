const { queryField, arg } = require('@nexus/schema')

const MetaFindManyQuery = queryField('findManyMeta', {
  type: 'Meta',
  list: [true],
  args: {
    where: 'MetaWhereInput',
    orderBy: arg({ type: 'MetaOrderByInput', list: true }),
    cursor: 'MetaWhereUniqueInput',
    distinct: 'MetaDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meta.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { MetaFindManyQuery }
