const { objectType } = require('@nexus/schema')

const Schedule = objectType({
  name: 'Schedule',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: false,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.boolean('isEnabled', { nullable: true })
    t.field('nextRunTime', { nullable: true, type: 'DateTime' })
    t.json('data', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
  },
})

module.exports = { Schedule }
