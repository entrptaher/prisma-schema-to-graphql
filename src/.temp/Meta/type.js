const { objectType } = require('@nexus/schema')

const Meta = objectType({
  name: 'Meta',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.string('title', { nullable: false })
    t.string('urlRaw', { nullable: false })
    t.string('userAgent', { nullable: false })
    t.int('vW', { nullable: false })
    t.int('vH', { nullable: false })
  },
})

module.exports = { Meta }
