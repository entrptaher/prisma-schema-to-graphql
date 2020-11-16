const { queryField, arg } = require('@nexus/schema')

const AdminOptionsFindCountQuery = queryField('findManyAdminOptionsCount', {
  type: 'Int',
  args: {
    where: 'AdminOptionsWhereInput',
    orderBy: arg({ type: 'AdminOptionsOrderByInput', list: true }),
    cursor: 'AdminOptionsWhereUniqueInput',
    distinct: 'AdminOptionsDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.adminOptions.count(args)
  },
})
module.exports = { AdminOptionsFindCountQuery }
