const { mutationField, arg } = require('@nexus/schema')

const UiSettingsUpsertOneMutation = mutationField('upsertOneUiSettings', {
  type: 'UiSettings',
  nullable: false,
  args: {
    where: arg({
      type: 'UiSettingsWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'UiSettingsCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'UiSettingsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.uiSettings.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { UiSettingsUpsertOneMutation }
