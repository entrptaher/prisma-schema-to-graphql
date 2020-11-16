const { objectType } = require('@nexus/schema')

const AutoRenew = objectType({
  name: 'AutoRenew',
  definition(t) {
    t.string('id', { nullable: false })
    t.boolean('onExhaust', { nullable: true })
    t.boolean('monthly', { nullable: true })
    t.field('Package', {
      nullable: false,
      list: [true],
      type: 'Package',
      args: {
        where: 'PackageWhereInput',
        orderBy: 'PackageOrderByInput',
        cursor: 'PackageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PackageDistinctFieldEnum',
      },
      resolve(root) {
        return root.Package
      },
    })
  },
})

module.exports = { AutoRenew }
