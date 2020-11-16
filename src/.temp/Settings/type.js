const { objectType } = require('@nexus/schema')

const Settings = objectType({
  name: 'Settings',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('options', {
      nullable: true,
      type: 'AdminOptions',
      resolve(root) {
        return root.options
      },
    })
    t.field('instance', {
      nullable: true,
      type: 'InstanceSettings',
      resolve(root) {
        return root.instance
      },
    })
    t.field('ui', {
      nullable: true,
      type: 'UiSettings',
      resolve(root) {
        return root.ui
      },
    })
    t.string('adminOptionsId', { nullable: true })
    t.string('instanceSettingsId', { nullable: true })
    t.string('uiSettingsId', { nullable: true })
  },
})

module.exports = { Settings }
