const { objectType } = require('@nexus/schema')

const Log = objectType({
  name: 'Log',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.string('session', { nullable: true })
    t.string('lastAction', { nullable: true })
    t.field('time', { nullable: false, type: 'DateTime' })
    t.string('message', { nullable: true })
    t.string('instanceId', { nullable: true })
  },
})

module.exports = { Log }
