const { mutationField, arg } = require('@nexus/schema')

const SettingsUpsertOneMutation = mutationField('upsertOneSettings', {
  type: 'Settings',
  nullable: false,
  args: {
    where: arg({
      type: 'SettingsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SettingsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SettingsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.settings.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SettingsUpsertOneMutation }
