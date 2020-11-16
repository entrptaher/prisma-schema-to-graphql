const { mutationField, arg } = require('@nexus/schema')

const PackageUpsertOneMutation = mutationField('upsertOnePackage', {
  type: 'Package',
  nullable: false,
  args: {
    where: arg({
      type: 'PackageWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'PackageCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'PackageUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.package.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { PackageUpsertOneMutation }
