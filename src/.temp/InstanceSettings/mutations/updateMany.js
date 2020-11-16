const { mutationField, arg } = require('@nexus/schema')

const InstanceSettingsUpdateManyMutation = mutationField(
  'updateManyInstanceSettings',
  {
    type: 'BatchPayload',
    args: {
      where: arg({
        type: 'InstanceSettingsWhereInput',
        nullable: true,
      }),
      data: arg({
        type: 'InstanceSettingsUpdateManyMutationInput',
        nullable: false,
      }),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.instanceSettings.updateMany(args)
    },
  },
)
module.exports = { InstanceSettingsUpdateManyMutation }
