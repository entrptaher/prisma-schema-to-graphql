const { queryField, arg } = require('@nexus/schema')

const KeyFindFirstQuery = queryField('findFirstKey', {
  type: 'Key',
  nullable: true,
  args: {
    where: 'KeyWhereInput',
    orderBy: arg({ type: 'KeyOrderByInput', list: true }),
    cursor: 'KeyWhereUniqueInput',
    distinct: 'KeyDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.key.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { KeyFindFirstQuery }
