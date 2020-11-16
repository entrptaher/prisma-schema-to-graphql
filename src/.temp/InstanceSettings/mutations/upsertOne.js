const { mutationField, arg } = require('@nexus/schema')

const InstanceSettingsUpsertOneMutation = mutationField(
  'upsertOneInstanceSettings',
  {
    type: 'InstanceSettings',
    nullable: false,
    args: {
      where: arg({
        type: 'InstanceSettingsWhereUniqueInput',
        nullable: false,
      }),
      create: arg({
        type: 'InstanceSettingsCreateInput',
        nullable: false,
      }),
      update: arg({
        type: 'InstanceSettingsUpdateInput',
        nullable: false,
      }),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.instanceSettings.upsert({
        ...args,
        ...select,
      })
    },
  },
)
module.exports = { InstanceSettingsUpsertOneMutation }
