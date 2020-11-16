const { objectType } = require('@nexus/schema')

const Proxy = objectType({
  name: 'Proxy',
  definition(t) {
    t.field('user', {
      nullable: true,
      type: 'User',
      resolve(root) {
        return root.user
      },
    })
    t.string('id', { nullable: false })
    t.string('host', { nullable: false })
    t.int('port', { nullable: false })
    t.string('username', { nullable: true })
    t.string('password', { nullable: true })
    t.field('InstanceSettings', {
      nullable: true,
      type: 'InstanceSettings',
      resolve(root) {
        return root.InstanceSettings
      },
    })
    t.string('instanceSettingsId', { nullable: true })
    t.string('userId', { nullable: true })
  },
})

module.exports = { Proxy }
