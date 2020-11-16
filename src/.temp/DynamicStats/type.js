const { objectType } = require('@nexus/schema')

const DynamicStats = objectType({
  name: 'DynamicStats',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('url', { nullable: true })
    t.int('urlsCount', { nullable: true })
    t.int('duplicateCount', { nullable: true })
    t.int('invalidCount', { nullable: true })
    t.int('currIndex', { nullable: true })
    t.int('paginationCount', { nullable: true })
    t.int('lastPagination', { nullable: true })
    t.field('parent', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.parent
      },
    })
    t.int('fetchedParentPages', { nullable: true })
    t.int('linksRemainingInQueue', { nullable: true })
    t.json('resumeState', { nullable: true })
    t.field('parentList', {
      nullable: true,
      type: 'List',
      resolve(root) {
        return root.parentList
      },
    })
    t.field('Instance', {
      nullable: false,
      list: [true],
      type: 'Instance',
      args: {
        where: 'InstanceWhereInput',
        orderBy: 'InstanceOrderByInput',
        cursor: 'InstanceWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'InstanceDistinctFieldEnum',
      },
      resolve(root) {
        return root.Instance
      },
    })
    t.string('instanceId', { nullable: true })
    t.string('listId', { nullable: true })
  },
})

module.exports = { DynamicStats }
