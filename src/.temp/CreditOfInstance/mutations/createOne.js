const { mutationField, arg } = require('@nexus/schema')

const CreditOfInstanceCreateOneMutation = mutationField(
  'createOneCreditOfInstance',
  {
    type: 'CreditOfInstance',
    nullable: false,
    args: {
      data: arg({
        type: 'CreditOfInstanceCreateInput',
        nullable: false,
      }),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.creditOfInstance.create({
        data,
        ...select,
      })
    },
  },
)
module.exports = { CreditOfInstanceCreateOneMutation }
