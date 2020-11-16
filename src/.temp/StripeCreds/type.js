const { objectType } = require('@nexus/schema')

const StripeCreds = objectType({
  name: 'StripeCreds',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('customerId', { nullable: true })
    t.string('subscriptionId', { nullable: true })
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
  },
})

module.exports = { StripeCreds }
