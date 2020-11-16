const { objectType } = require('@nexus/schema')

const Key = objectType({
  name: 'Key',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('public', { nullable: false })
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

module.exports = { Key }
