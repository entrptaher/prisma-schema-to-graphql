const { objectType } = require('@nexus/schema')

const InstanceSettings = objectType({
  name: 'InstanceSettings',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('proxies', {
      nullable: false,
      list: [true],
      type: 'Proxy',
      args: {
        where: 'ProxyWhereInput',
        orderBy: 'ProxyOrderByInput',
        cursor: 'ProxyWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProxyDistinctFieldEnum',
      },
      resolve(root) {
        return root.proxies
      },
    })
    t.field('navigation', {
      nullable: true,
      type: 'Navigation',
      resolve(root) {
        return root.navigation
      },
    })
    t.field('limits', {
      nullable: true,
      type: 'Limits',
      resolve(root) {
        return root.limits
      },
    })
    t.field('intervals', {
      nullable: true,
      type: 'Intervals',
      resolve(root) {
        return root.intervals
      },
    })
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
    t.string('navigationId', { nullable: true })
    t.string('limitsId', { nullable: true })
    t.string('intervalsId', { nullable: true })
  },
})

module.exports = { InstanceSettings }
