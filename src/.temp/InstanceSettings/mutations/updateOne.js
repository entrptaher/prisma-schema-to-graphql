const { mutationField, arg } = require('@nexus/schema')

const InstanceSettingsUpdateOneMutation = mutationField(
  'updateOneInstanceSettings',
  {
    type: 'InstanceSettings',
    nullable: false,
    args: {
      where: arg({
        type: 'InstanceSettingsWhereUniqueInput',
        nullable: false,
      }),
      data: arg({
        type: 'InstanceSettingsUpdateInput',
        nullable: false,
      }),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.instanceSettings.update({
        where,
        data,
        ...select,
      })
    },
  },
)
module.exports = { InstanceSettingsUpdateOneMutation }
