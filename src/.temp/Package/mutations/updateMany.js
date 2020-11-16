const { mutationField, arg } = require('@nexus/schema')

const PackageUpdateManyMutation = mutationField('updateManyPackage', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PackageWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'PackageUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.package.updateMany(args)
  },
})
module.exports = { PackageUpdateManyMutation }
