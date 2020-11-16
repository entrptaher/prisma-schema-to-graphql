const { objectType } = require('@nexus/schema')

const UiSettings = objectType({
  name: 'UiSettings',
  definition(t) {
    t.string('id', { nullable: false })
    t.int('rowsPerTable', { nullable: true })
    t.field('Settings', {
      nullable: false,
      list: [true],
      type: 'Settings',
      args: {
        where: 'SettingsWhereInput',
        orderBy: 'SettingsOrderByInput',
        cursor: 'SettingsWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SettingsDistinctFieldEnum',
      },
      resolve(root) {
        return root.Settings
      },
    })
  },
})

module.exports = { UiSettings }
