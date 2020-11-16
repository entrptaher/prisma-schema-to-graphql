const { mutationField, arg } = require('@nexus/schema')

const PackageCreateOneMutation = mutationField('createOnePackage', {
  type: 'Package',
  nullable: false,
  args: {
    data: arg({
      type: 'PackageCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.package.create({
      data,
      ...select,
    })
  },
})
module.exports = { PackageCreateOneMutation }
