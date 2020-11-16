const { queryField, arg } = require('@nexus/schema')

const MetaFindFirstQuery = queryField('findFirstMeta', {
  type: 'Meta',
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
    return prisma.meta.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { MetaFindFirstQuery }
