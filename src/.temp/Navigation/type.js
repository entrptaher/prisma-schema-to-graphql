const { objectType } = require('@nexus/schema')

const Navigation = objectType({
  name: 'Navigation',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('retry', {
      nullable: true,
      type: 'Retry',
      resolve(root) {
        return root.retry
      },
    })
    t.int('timeout', { nullable: true })
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
    t.string('retryId', { nullable: true })
  },
})

module.exports = { Navigation }
