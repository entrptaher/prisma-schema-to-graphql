const { objectType } = require('@nexus/schema')

const SiteParent = objectType({
  name: 'SiteParent',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('parentInstance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.parentInstance
      },
    })
    t.field('currentInstance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.currentInstance
      },
    })
    t.json('actionChain', { nullable: false, list: [true] })
    t.string('parentInstanceId', { nullable: true })
    t.string('currentInstanceId', { nullable: true })
    t.field('Site', {
      nullable: false,
      list: [true],
      type: 'Site',
      args: {
        where: 'SiteWhereInput',
        orderBy: 'SiteOrderByInput',
        cursor: 'SiteWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SiteDistinctFieldEnum',
      },
      resolve(root) {
        return root.Site
      },
    })
  },
})

module.exports = { SiteParent }
