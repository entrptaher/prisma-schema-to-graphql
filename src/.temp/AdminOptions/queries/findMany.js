const { queryField, arg } = require('@nexus/schema')

const AdminOptionsFindManyQuery = queryField('findManyAdminOptions', {
  type: 'AdminOptions',
  list: [true],
  args: {
    where: 'AdminOptionsWhereInput',
    orderBy: arg({ type: 'AdminOptionsOrderByInput', list: true }),
    cursor: 'AdminOptionsWhereUniqueInput',
    distinct: 'AdminOptionsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.adminOptions.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { AdminOptionsFindManyQuery }
