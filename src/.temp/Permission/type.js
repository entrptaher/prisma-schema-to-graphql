const { objectType } = require('@nexus/schema')

const Permission = objectType({
  name: 'Permission',
  definition(t) {
    t.string('id', { nullable: false })
    t.string('description', { nullable: false })
    t.string('slug', { nullable: false })
    t.field('Role', {
      nullable: true,
      type: 'Role',
      resolve(root) {
        return root.Role
      },
    })
    t.string('roleId', { nullable: true })
  },
})

module.exports = { Permission }
