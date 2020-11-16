const { mutationField, arg } = require('@nexus/schema')

const CreditOfUserUpdateManyMutation = mutationField('updateManyCreditOfUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CreditOfUserWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'CreditOfUserUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.creditOfUser.updateMany(args)
  },
})
module.exports = { CreditOfUserUpdateManyMutation }
