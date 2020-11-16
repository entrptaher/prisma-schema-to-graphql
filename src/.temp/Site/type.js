const { objectType } = require('@nexus/schema')

const Site = objectType({
  name: 'Site',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.string('instanceSession', { nullable: false })
    t.field('parent', {
      nullable: true,
      type: 'SiteParent',
      resolve(root) {
        return root.parent
      },
    })
    t.json('data', { nullable: true })
    t.string('raw', { nullable: false, list: [true] })
    t.field('state', {
      nullable: true,
      type: 'SiteState',
      resolve(root) {
        return root.state
      },
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.string('instanceId', { nullable: true })
    t.string('siteParentId', { nullable: true })
    t.string('siteStateId', { nullable: true })
  },
})

module.exports = { Site }
