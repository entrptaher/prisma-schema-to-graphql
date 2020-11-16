const { objectType } = require('@nexus/schema')

const Activity = objectType({
  name: 'Activity',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('user', {
      nullable: false,
      type: 'User',
      resolve(root) {
        return root.user
      },
    })
    t.string('ip', { nullable: false })
    t.string('browser', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.string('content', { nullable: false })
    t.string('userId', { nullable: false })
  },
})

module.exports = { Activity }
