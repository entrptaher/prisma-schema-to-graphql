const { objectType } = require('@nexus/schema')

const Intervals = objectType({
  name: 'Intervals',
  definition(t) {
    t.string('id', { nullable: false })
    t.int('poll', { nullable: true })
    t.int('tinyAction', { nullable: true })
    t.field('InstanceSettings', {
      nullable: false,
      list: [true],
      type: 'InstanceSettings',
      args: {
        where: 'InstanceSettingsWhereInput',
        orderBy: 'InstanceSettingsOrderByInput',
        cursor: 'InstanceSettingsWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'InstanceSettingsDistinctFieldEnum',
      },
      resolve(root) {
        return root.InstanceSettings
      },
    })
  },
})

module.exports = { Intervals }
