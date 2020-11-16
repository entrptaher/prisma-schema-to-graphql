const { objectType } = require('@nexus/schema')

const Package = objectType({
  name: 'Package',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('stripeProdId', { nullable: false })
    t.string('stripePriceId', { nullable: false })
    t.string('name', { nullable: false })
    t.string('slug', { nullable: false })
    t.float('allocatedCredits', { nullable: false })
    t.float('minCost', { nullable: false })
    t.string('minPage', { nullable: true })
    t.float('additionalCred', { nullable: true })
    t.field('autoRenew', {
      nullable: false,
      type: 'AutoRenew',
      resolve(root) {
        return root.autoRenew
      },
    })
    t.int('price', { nullable: false })
    t.boolean('billable', { nullable: false })
    t.field('User', {
      nullable: false,
      list: [true],
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserDistinctFieldEnum',
      },
      resolve(root) {
        return root.User
      },
    })
    t.string('autoRenewId', { nullable: false })
  },
})

module.exports = { Package }
