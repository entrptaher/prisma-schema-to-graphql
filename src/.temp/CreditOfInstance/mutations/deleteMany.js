const { mutationField, arg } = require('@nexus/schema')

const CreditOfInstanceDeleteManyMutation = mutationField(
  'deleteManyCreditOfInstance',
  {
    type: 'BatchPayload',
    args: {
      where: arg({
        type: 'CreditOfInstanceWhereInput',
        nullable: true,
      }),
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.creditOfInstance.deleteMany({ where })
    },
  },
)
module.exports = { CreditOfInstanceDeleteManyMutation }
