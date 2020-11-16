const { queryField, arg } = require('@nexus/schema')

const PackageFindFirstQuery = queryField('findFirstPackage', {
  type: 'Package',
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
    return prisma.package.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { PackageFindFirstQuery }
