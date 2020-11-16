const { objectType } = require('@nexus/schema')

const State = objectType({
  name: 'State',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('instance', {
      nullable: true,
      type: 'Instance',
      resolve(root) {
        return root.instance
      },
    })
    t.boolean('isEnabled', { nullable: true })
    t.boolean('isRequested', { nullable: true })
    t.boolean('isQueued', { nullable: true })
    t.boolean('isRunning', { nullable: true })
    t.boolean('isCanceled', { nullable: true })
    t.boolean('isForcedStopped', { nullable: true })
    t.boolean('isFinished', { nullable: true })
    t.string('status', { nullable: false })
    t.field('startedAt', { nullable: true, type: 'DateTime' })
    t.field('queuedAt', { nullable: true, type: 'DateTime' })
    t.field('finishedAt', { nullable: true, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
    t.float('lastRunTime', { nullable: true })
    t.int('paginationCount', { nullable: true })
  },
})

module.exports = { State }
