const { mutationField, arg } = require('@nexus/schema')

const CreditOfInstanceUpdateManyMutation = mutationField(
  'updateManyCreditOfInstance',
  {
    type: 'BatchPayload',
    args: {
      where: arg({
        type: 'CreditOfInstanceWhereInput',
        nullable: true,
      }),
      data: arg({
        type: 'CreditOfInstanceUpdateManyMutationInput',
        nullable: false,
      }),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.creditOfInstance.updateMany(args)
    },
  },
)
module.exports = { CreditOfInstanceUpdateManyMutation }
