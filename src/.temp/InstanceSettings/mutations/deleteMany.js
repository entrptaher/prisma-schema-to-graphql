const { mutationField, arg } = require('@nexus/schema')

const InstanceSettingsDeleteManyMutation = mutationField(
  'deleteManyInstanceSettings',
  {
    type: 'BatchPayload',
    args: {
      where: arg({
        type: 'InstanceSettingsWhereInput',
        nullable: true,
      }),
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.instanceSettings.deleteMany({ where })
    },
  },
)
module.exports = { InstanceSettingsDeleteManyMutation }
