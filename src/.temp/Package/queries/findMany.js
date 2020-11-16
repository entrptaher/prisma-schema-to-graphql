const { queryField, arg } = require('@nexus/schema')

const PackageFindManyQuery = queryField('findManyPackage', {
  type: 'Package',
  list: [true],
  args: {
    where: 'PackageWhereInput',
    orderBy: arg({ type: 'PackageOrderByInput', list: true }),
    cursor: 'PackageWhereUniqueInput',
    distinct: 'PackageDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.package.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { PackageFindManyQuery }
