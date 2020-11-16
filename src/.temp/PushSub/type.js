const { objectType } = require('@nexus/schema')

const PushSub = objectType({
  name: 'PushSub',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('value', { nullable: false })
  },
})

module.exports = { PushSub }
