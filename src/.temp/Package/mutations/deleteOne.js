const { mutationField, arg } = require('@nexus/schema')

const PackageDeleteOneMutation = mutationField('deleteOnePackage', {
  type: 'Package',
  nullable: true,
  args: {
    where: arg({
      type: 'PackageWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.package.delete({
      where,
      ...select,
    })
  },
})
module.exports = { PackageDeleteOneMutation }
