const { mutationField, arg } = require('@nexus/schema')

const GoogleAuthDeleteOneMutation = mutationField('deleteOneGoogleAuth', {
  type: 'GoogleAuth',
  nullable: true,
  args: {
    where: arg({
      type: 'GoogleAuthWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.googleAuth.delete({
      where,
      ...select,
    })
  },
})
module.exports = { GoogleAuthDeleteOneMutation }
