const { mutationField, arg } = require('@nexus/schema')

const CreditOfInstanceUpdateOneMutation = mutationField(
  'updateOneCreditOfInstance',
  {
    type: 'CreditOfInstance',
    nullable: false,
    args: {
      where: arg({
        type: 'CreditOfInstanceWhereUniqueInput',
        nullable: false,
      }),
      data: arg({
        type: 'CreditOfInstanceUpdateInput',
        nullable: false,
      }),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.creditOfInstance.update({
        where,
        data,
        ...select,
      })
    },
  },
)
module.exports = { CreditOfInstanceUpdateOneMutation }
