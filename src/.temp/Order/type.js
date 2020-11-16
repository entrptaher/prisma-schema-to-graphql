const { objectType } = require('@nexus/schema')

const Order = objectType({
  name: 'Order',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('user', {
      nullable: false,
      type: 'User',
      resolve(root) {
        return root.user
      },
    })
    t.string('purchasedFor', { nullable: false })
    t.string('receiptUrl', { nullable: false })
    t.int('credit', { nullable: false })
    t.float('amount', { nullable: false })
    t.string('stripeChargeId', { nullable: true })
    t.string('stripeSubscriptionId', { nullable: true })
    t.boolean('refunded', { nullable: true })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.string('userId', { nullable: false })
  },
})

module.exports = { Order }
