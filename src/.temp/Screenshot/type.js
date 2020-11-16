const { objectType } = require('@nexus/schema')

const Screenshot = objectType({
  name: 'Screenshot',
  definition(t) {
    t.field('instance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.string('id', { nullable: false })
    t.string('actionId', { nullable: false })
    t.string('prevActionId', { nullable: false })
    t.string('nextActionId', { nullable: true })
    t.string('url', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.string('instanceId', { nullable: true })
  },
})

module.exports = { Screenshot }
