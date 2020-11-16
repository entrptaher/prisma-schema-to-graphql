const { mutationField, arg } = require('@nexus/schema')

const SettingsCreateOneMutation = mutationField('createOneSettings', {
  type: 'Settings',
  nullable: false,
  args: {
    data: arg({
      type: 'SettingsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.settings.create({
      data,
      ...select,
    })
  },
})
module.exports = { SettingsCreateOneMutation }
