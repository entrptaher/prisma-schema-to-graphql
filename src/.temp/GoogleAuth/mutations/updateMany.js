const { mutationField, arg } = require('@nexus/schema')

const GoogleAuthUpdateManyMutation = mutationField('updateManyGoogleAuth', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'GoogleAuthWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'GoogleAuthUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.googleAuth.updateMany(args)
  },
})
module.exports = { GoogleAuthUpdateManyMutation }
