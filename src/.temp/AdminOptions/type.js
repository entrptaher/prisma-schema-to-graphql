const { objectType } = require('@nexus/schema')

const AdminOptions = objectType({
  name: 'AdminOptions',
  definition(t) {
    t.string('id', { nullable: false })
    t.boolean('schedules', { nullable: true })
    t.boolean('downloads', { nullable: true })
    t.boolean('imports', { nullable: true })
    t.boolean('exports', { nullable: true })
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

module.exports = { AdminOptions }
