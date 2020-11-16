const { mutationField, arg } = require('@nexus/schema')

const PreservedDataUpdateManyMutation = mutationField(
  'updateManyPreservedData',
  {
    type: 'BatchPayload',
    args: {
      where: arg({
        type: 'PreservedDataWhereInput',
        nullable: true,
      }),
      data: arg({
        type: 'PreservedDataUpdateManyMutationInput',
        nullable: false,
      }),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.preservedData.updateMany(args)
    },
  },
)
module.exports = { PreservedDataUpdateManyMutation }
