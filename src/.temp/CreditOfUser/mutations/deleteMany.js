const { mutationField, arg } = require('@nexus/schema')

const CreditOfUserDeleteManyMutation = mutationField('deleteManyCreditOfUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CreditOfUserWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.creditOfUser.deleteMany({ where })
  },
})
module.exports = { CreditOfUserDeleteManyMutation }
