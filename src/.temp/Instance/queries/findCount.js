const { queryField, arg } = require('@nexus/schema')

const InstanceFindCountQuery = queryField('findManyInstanceCount', {
  type: 'Int',
  args: {
    where: 'InstanceWhereInput',
    orderBy: arg({ type: 'InstanceOrderByInput', list: true }),
    cursor: 'InstanceWhereUniqueInput',
    distinct: 'InstanceDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.instance.count(args)
  },
})
module.exports = { InstanceFindCountQuery }
