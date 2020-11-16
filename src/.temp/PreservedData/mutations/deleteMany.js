const { mutationField, arg } = require('@nexus/schema')

const PreservedDataDeleteManyMutation = mutationField(
  'deleteManyPreservedData',
  {
    type: 'BatchPayload',
    args: {
      where: arg({
        type: 'PreservedDataWhereInput',
        nullable: true,
      }),
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.preservedData.deleteMany({ where })
    },
  },
)
module.exports = { PreservedDataDeleteManyMutation }
