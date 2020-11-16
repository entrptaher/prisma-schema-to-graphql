const { objectType } = require('@nexus/schema')

const Session = objectType({
  name: 'Session',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('lastSession', { nullable: false })
    t.field('list', {
      nullable: false,
      list: [true],
      type: 'SessionList',
      args: {
        where: 'SessionListWhereInput',
        orderBy: 'SessionListOrderByInput',
        cursor: 'SessionListWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SessionListDistinctFieldEnum',
      },
      resolve(root) {
        return root.list
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
  },
})

module.exports = { Session }
