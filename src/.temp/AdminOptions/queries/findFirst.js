const { queryField, arg } = require('@nexus/schema')

const AdminOptionsFindFirstQuery = queryField('findFirstAdminOptions', {
  type: 'AdminOptions',
  nullable: true,
  args: {
    where: 'AdminOptionsWhereInput',
    orderBy: arg({ type: 'AdminOptionsOrderByInput', list: true }),
    cursor: 'AdminOptionsWhereUniqueInput',
    distinct: 'AdminOptionsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.adminOptions.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { AdminOptionsFindFirstQuery }
