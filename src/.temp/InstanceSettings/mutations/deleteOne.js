const { mutationField, arg } = require('@nexus/schema')

const InstanceSettingsDeleteOneMutation = mutationField(
  'deleteOneInstanceSettings',
  {
    type: 'InstanceSettings',
    nullable: true,
    args: {
      where: arg({
        type: 'InstanceSettingsWhereUniqueInput',
        nullable: false,
      }),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.instanceSettings.delete({
        where,
        ...select,
      })
    },
  },
)
module.exports = { InstanceSettingsDeleteOneMutation }
