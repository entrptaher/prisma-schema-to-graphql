const { objectType } = require('@nexus/schema')

const GoogleSheet = objectType({
  name: 'GoogleSheet',
  definition(t) {
    t.string('id', { nullable: false })
    t.boolean('isRealtimeEnabled', { nullable: true })
    t.boolean('isOverWrite', { nullable: true })
    t.string('spreadsheetId', { nullable: true })
    t.string('sheetId', { nullable: true })
    t.string('lastUpdateRange', { nullable: true })
    t.field('Instance', {
      nullable: false,
      list: [true],
      type: 'Instance',
      args: {
        where: 'InstanceWhereInput',
        orderBy: 'InstanceOrderByInput',
        cursor: 'InstanceWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'InstanceDistinctFieldEnum',
      },
      resolve(root) {
        return root.Instance
      },
    })
  },
})

module.exports = { GoogleSheet }
