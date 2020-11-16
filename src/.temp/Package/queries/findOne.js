const { queryField, arg } = require('@nexus/schema')

const PackageFindOneQuery = queryField('findOnePackage', {
  type: 'Package',
  nullable: true,
  args: {
    where: arg({
      type: 'PackageWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.package.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { PackageFindOneQuery }
