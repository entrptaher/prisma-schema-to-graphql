const { objectType } = require('@nexus/schema')

const Row = objectType({
  name: 'Row',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('values', { nullable: false, list: [true] })
    t.field('List', {
      nullable: true,
      type: 'List',
      resolve(root) {
        return root.List
      },
    })
    t.string('listId', { nullable: true })
  },
})

module.exports = { Row }
