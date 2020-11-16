const { queryField, arg } = require('@nexus/schema')

const RoleFindManyQuery = queryField('findManyRole', {
  type: 'Role',
  list: [true],
  args: {
    where: 'RoleWhereInput',
    orderBy: arg({ type: 'RoleOrderByInput', list: true }),
    cursor: 'RoleWhereUniqueInput',
    distinct: 'RoleDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.role.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { RoleFindManyQuery }
