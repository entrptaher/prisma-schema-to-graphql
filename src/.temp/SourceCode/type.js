const { objectType } = require('@nexus/schema')

const SourceCode = objectType({
  name: 'SourceCode',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: false,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.string('session', { nullable: false })
    t.field('time', { nullable: false, type: 'DateTime' })
    t.string('bucket', { nullable: false })
    t.string('file', { nullable: false })
    t.string('actionId', { nullable: false })
    t.string('instanceId', { nullable: false })
  },
})

module.exports = { SourceCode }
