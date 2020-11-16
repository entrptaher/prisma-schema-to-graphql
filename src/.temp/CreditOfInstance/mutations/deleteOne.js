const { mutationField, arg } = require('@nexus/schema')

const CreditOfInstanceDeleteOneMutation = mutationField(
  'deleteOneCreditOfInstance',
  {
    type: 'CreditOfInstance',
    nullable: true,
    args: {
      where: arg({
        type: 'CreditOfInstanceWhereUniqueInput',
        nullable: false,
      }),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.creditOfInstance.delete({
        where,
        ...select,
      })
    },
  },
)
module.exports = { CreditOfInstanceDeleteOneMutation }
