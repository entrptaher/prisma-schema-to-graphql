const { mutationField, arg } = require('@nexus/schema')

const GoogleAuthDeleteManyMutation = mutationField('deleteManyGoogleAuth', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'GoogleAuthWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.googleAuth.deleteMany({ where })
  },
})
module.exports = { GoogleAuthDeleteManyMutation }
