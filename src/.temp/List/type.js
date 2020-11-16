const { objectType } = require('@nexus/schema')

const List = objectType({
  name: 'List',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('user', {
      nullable: false,
      type: 'User',
      resolve(root) {
        return root.user
      },
    })
    t.string('title', { nullable: false })
    t.string('headers', { nullable: false, list: [true] })
    t.field('rows', {
      nullable: false,
      list: [true],
      type: 'Row',
      args: {
        where: 'RowWhereInput',
        orderBy: 'RowOrderByInput',
        cursor: 'RowWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'RowDistinctFieldEnum',
      },
      resolve(root) {
        return root.rows
      },
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('DynamicStats', {
      nullable: false,
      list: [true],
      type: 'DynamicStats',
      args: {
        where: 'DynamicStatsWhereInput',
        orderBy: 'DynamicStatsOrderByInput',
        cursor: 'DynamicStatsWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DynamicStatsDistinctFieldEnum',
      },
      resolve(root) {
        return root.DynamicStats
      },
    })
    t.string('userId', { nullable: false })
  },
})

module.exports = { List }
