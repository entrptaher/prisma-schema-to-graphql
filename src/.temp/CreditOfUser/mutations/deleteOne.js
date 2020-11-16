const { mutationField, arg } = require('@nexus/schema')

const CreditOfUserDeleteOneMutation = mutationField('deleteOneCreditOfUser', {
  type: 'CreditOfUser',
  nullable: true,
  args: {
    where: arg({
      type: 'CreditOfUserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.creditOfUser.delete({
      where,
      ...select,
    })
  },
})
module.exports = { CreditOfUserDeleteOneMutation }
