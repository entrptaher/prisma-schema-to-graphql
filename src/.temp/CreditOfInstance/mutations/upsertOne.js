const { mutationField, arg } = require('@nexus/schema')

const CreditOfInstanceUpsertOneMutation = mutationField(
  'upsertOneCreditOfInstance',
  {
    type: 'CreditOfInstance',
    nullable: false,
    args: {
      where: arg({
        type: 'CreditOfInstanceWhereUniqueInput',
        nullable: false,
      }),
      create: arg({
        type: 'CreditOfInstanceCreateInput',
        nullable: false,
      }),
      update: arg({
        type: 'CreditOfInstanceUpdateInput',
        nullable: false,
      }),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.creditOfInstance.upsert({
        ...args,
        ...select,
      })
    },
  },
)
module.exports = { CreditOfInstanceUpsertOneMutation }
