const { objectType } = require('@nexus/schema')

const Notification = objectType({
  name: 'Notification',
  definition(t) {
    t.field('user', {
      nullable: false,
      type: 'User',
      resolve(root) {
        return root.user
      },
    })
    t.string('id', { nullable: false })
    t.string('title', { nullable: false })
    t.string('description', { nullable: false })
    t.string('url', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.int('count', { nullable: false })
    t.boolean('unread', { nullable: true })
    t.string('userId', { nullable: false })
  },
})

module.exports = { Notification }
