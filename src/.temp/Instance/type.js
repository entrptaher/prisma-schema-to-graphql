const { objectType } = require('@nexus/schema')

const Instance = objectType({
  name: 'Instance',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('user', {
      nullable: true,
      type: 'User',
      resolve(root) {
        return root.user
      },
    })
    t.field('meta', {
      nullable: true,
      type: 'Meta',
      resolve(root) {
        return root.meta
      },
    })
    t.field('state', {
      nullable: true,
      type: 'State',
      resolve(root) {
        return root.state
      },
    })
    t.field('credit', {
      nullable: true,
      type: 'CreditOfInstance',
      resolve(root) {
        return root.credit
      },
    })
    t.json('actionList', { nullable: false, list: [true] })
    t.boolean('isDynamic', { nullable: true })
    t.field('dynamicStats', {
      nullable: true,
      type: 'DynamicStats',
      resolve(root) {
        return root.dynamicStats
      },
    })
    t.field('logs', {
      nullable: false,
      list: [true],
      type: 'Log',
      args: {
        where: 'LogWhereInput',
        orderBy: 'LogOrderByInput',
        cursor: 'LogWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'LogDistinctFieldEnum',
      },
      resolve(root) {
        return root.logs
      },
    })
    t.field('sourceCodes', {
      nullable: false,
      list: [true],
      type: 'SourceCode',
      args: {
        where: 'SourceCodeWhereInput',
        orderBy: 'SourceCodeOrderByInput',
        cursor: 'SourceCodeWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SourceCodeDistinctFieldEnum',
      },
      resolve(root) {
        return root.sourceCodes
      },
    })
    t.field('screenshots', {
      nullable: false,
      list: [true],
      type: 'Screenshot',
      args: {
        where: 'ScreenshotWhereInput',
        orderBy: 'ScreenshotOrderByInput',
        cursor: 'ScreenshotWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ScreenshotDistinctFieldEnum',
      },
      resolve(root) {
        return root.screenshots
      },
    })
    t.field('sites', {
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
        return root.sites
      },
    })
    t.field('preserved', {
      nullable: true,
      type: 'PreservedData',
      resolve(root) {
        return root.preserved
      },
    })
    t.field('session', {
      nullable: true,
      type: 'Session',
      resolve(root) {
        return root.session
      },
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.field('googleSheet', {
      nullable: true,
      type: 'GoogleSheet',
      resolve(root) {
        return root.googleSheet
      },
    })
    t.int('dynamicInputCount', { nullable: false })
    t.field('schedule', {
      nullable: true,
      type: 'Schedule',
      resolve(root) {
        return root.schedule
      },
    })
    t.field('currentInstance', {
      nullable: false,
      list: [true],
      type: 'SiteParent',
      args: {
        where: 'SiteParentWhereInput',
        orderBy: 'SiteParentOrderByInput',
        cursor: 'SiteParentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SiteParentDistinctFieldEnum',
      },
      resolve(root) {
        return root.currentInstance
      },
    })
    t.field('parentInstance', {
      nullable: false,
      list: [true],
      type: 'SiteParent',
      args: {
        where: 'SiteParentWhereInput',
        orderBy: 'SiteParentOrderByInput',
        cursor: 'SiteParentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SiteParentDistinctFieldEnum',
      },
      resolve(root) {
        return root.parentInstance
      },
    })
    t.field('DynamicStats', {
      nullable: false,
      list: [true],
      type: 'DynamicStats',
      args: {
        where: 'DynamicStatsWhereInput',
        orderBy: 'DynamicStatsOrderByInput',
        cursor: 'DynamicStatsWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'DynamicStatsDistinctFieldEnum',
      },
      resolve(root) {
        return root.DynamicStats
      },
    })
    t.string('googleSheetId', { nullable: true })
    t.string('userId', { nullable: true })
    t.string('metaId', { nullable: true })
    t.string('stateId', { nullable: true })
    t.string('dynamicStatsId', { nullable: true })
    t.string('preservedDataId', { nullable: true })
    t.string('sessionId', { nullable: true })
    t.string('scheduleId', { nullable: true })
  },
})

module.exports = { Instance }
