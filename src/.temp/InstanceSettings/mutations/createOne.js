const { mutationField, arg } = require('@nexus/schema')

const InstanceSettingsCreateOneMutation = mutationField(
  'createOneInstanceSettings',
  {
    type: 'InstanceSettings',
    nullable: false,
    args: {
      data: arg({
        type: 'InstanceSettingsCreateInput',
        nullable: false,
      }),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.instanceSettings.create({
        data,
        ...select,
      })
    },
  },
)
module.exports = { InstanceSettingsCreateOneMutation }
