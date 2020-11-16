const { objectType } = require('@nexus/schema')

const CreditOfInstance = objectType({
  name: 'CreditOfInstance',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.float('spent', { nullable: true })
    t.float('lastRun', { nullable: true })
    t.string('instanceId', { nullable: true })
  },
})

module.exports = { CreditOfInstance }
