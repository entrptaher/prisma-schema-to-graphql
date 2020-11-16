const { queryField, arg } = require('@nexus/schema')

const PackageAggregateQuery = queryField('aggregatePackage', {
  type: 'AggregatePackage',
  nullable: true,
  args: {
    where: 'PackageWhereInput',
    orderBy: arg({ type: 'PackageOrderByInput', list: true }),
    cursor: 'PackageWhereUniqueInput',
    distinct: 'PackageDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.package.aggregate({ ...args, ...select })
  },
})
module.exports = { PackageAggregateQuery }
