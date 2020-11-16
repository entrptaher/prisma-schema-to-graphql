const { queryField, arg } = require('@nexus/schema')

const PackageFindCountQuery = queryField('findManyPackageCount', {
  type: 'Int',
  args: {
    where: 'PackageWhereInput',
    orderBy: arg({ type: 'PackageOrderByInput', list: true }),
    cursor: 'PackageWhereUniqueInput',
    distinct: 'PackageDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.package.count(args)
  },
})
module.exports = { PackageFindCountQuery }
