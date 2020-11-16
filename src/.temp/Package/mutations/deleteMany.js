const { mutationField, arg } = require('@nexus/schema')

const PackageDeleteManyMutation = mutationField('deleteManyPackage', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PackageWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.package.deleteMany({ where })
  },
})
module.exports = { PackageDeleteManyMutation }
