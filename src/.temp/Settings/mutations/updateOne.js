const { mutationField, arg } = require('@nexus/schema')

const SettingsUpdateOneMutation = mutationField('updateOneSettings', {
  type: 'Settings',
  nullable: false,
  args: {
    where: arg({
      type: 'SettingsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SettingsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.settings.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SettingsUpdateOneMutation }
