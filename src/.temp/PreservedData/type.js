const { objectType } = require('@nexus/schema')

const PreservedData = objectType({
  name: 'PreservedData',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('cookies', { nullable: true })
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

module.exports = { PreservedData }
