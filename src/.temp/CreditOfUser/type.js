const { objectType } = require('@nexus/schema')

const CreditOfUser = objectType({
  name: 'CreditOfUser',
  definition(t) {
    t.string('id', { nullable: false })
    t.float('remaining', { nullable: true })
    t.float('spent', { nullable: true })
    t.float('lifeTimeSpent', { nullable: true })
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

module.exports = { CreditOfUser }
