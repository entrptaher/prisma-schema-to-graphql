const { objectType } = require('@nexus/schema')

const GoogleAuth = objectType({
  name: 'GoogleAuth',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('accessToken', { nullable: true })
    t.string('refreshToken', { nullable: true })
    t.string('scope', { nullable: true })
    t.string('idToken', { nullable: true })
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

module.exports = { GoogleAuth }
