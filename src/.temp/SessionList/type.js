const { objectType } = require('@nexus/schema')

const SessionList = objectType({
  name: 'SessionList',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('session', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('Session', {
      nullable: true,
      type: 'Session',
      resolve(root) {
        return root.Session
      },
    })
    t.string('sessionId', { nullable: true })
  },
})

module.exports = { SessionList }
