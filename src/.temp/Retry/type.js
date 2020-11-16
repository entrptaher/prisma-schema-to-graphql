const { objectType } = require('@nexus/schema')

const Retry = objectType({
  name: 'Retry',
  definition(t) {
    t.string('id', { nullable: false })
    t.int('delay', { nullable: true })
    t.int('count', { nullable: true })
    t.field('Navigation', {
      nullable: false,
      list: [true],
      type: 'Navigation',
      args: {
        where: 'NavigationWhereInput',
        orderBy: 'NavigationOrderByInput',
        cursor: 'NavigationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'NavigationDistinctFieldEnum',
      },
      resolve(root) {
        return root.Navigation
      },
    })
  },
})

module.exports = { Retry }
