const { objectType } = require('@nexus/schema')

const Limits = objectType({
  name: 'Limits',
  definition(t) {
    t.string('id', { nullable: false })
    t.int('instancesPerUser', { nullable: true })
    t.int('maxQueuedInstance', { nullable: true })
    t.int('maxRunningInstance', { nullable: true })
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

module.exports = { Limits }
