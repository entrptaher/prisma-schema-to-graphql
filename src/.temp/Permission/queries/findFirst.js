const { queryField, arg } = require('@nexus/schema')

const PermissionFindFirstQuery = queryField('findFirstPermission', {
  type: 'Permission',
  nullable: true,
  args: {
    where: 'PermissionWhereInput',
    orderBy: arg({ type: 'PermissionOrderByInput', list: true }),
    cursor: 'PermissionWhereUniqueInput',
    distinct: 'PermissionDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.permission.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { PermissionFindFirstQuery }
