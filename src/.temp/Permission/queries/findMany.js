const { queryField, arg } = require('@nexus/schema')

const PermissionFindManyQuery = queryField('findManyPermission', {
  type: 'Permission',
  list: [true],
  args: {
    where: 'PermissionWhereInput',
    orderBy: arg({ type: 'PermissionOrderByInput', list: true }),
    cursor: 'PermissionWhereUniqueInput',
    distinct: 'PermissionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.permission.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { PermissionFindManyQuery }
