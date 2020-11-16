const { mutationField, arg } = require('@nexus/schema')

const PackageUpdateOneMutation = mutationField('updateOnePackage', {
  type: 'Package',
  nullable: false,
  args: {
    where: arg({
      type: 'PackageWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'PackageUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.package.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { PackageUpdateOneMutation }
