const { objectType } = require('@nexus/schema')

const SiteState = objectType({
  name: 'SiteState',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('server', { nullable: true })
    t.string('url', { nullable: true })
    t.int('index', { nullable: true })
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

module.exports = { SiteState }
