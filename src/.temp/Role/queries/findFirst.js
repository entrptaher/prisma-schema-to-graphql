const { queryField, arg } = require('@nexus/schema')

const RoleFindFirstQuery = queryField('findFirstRole', {
  type: 'Role',
  nullable: true,
  args: {
    where: 'RoleWhereInput',
    orderBy: arg({ type: 'RoleOrderByInput', list: true }),
    cursor: 'RoleWhereUniqueInput',
    distinct: 'RoleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.role.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { RoleFindFirstQuery }
