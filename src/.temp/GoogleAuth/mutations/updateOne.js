const { mutationField, arg } = require('@nexus/schema')

const GoogleAuthUpdateOneMutation = mutationField('updateOneGoogleAuth', {
  type: 'GoogleAuth',
  nullable: false,
  args: {
    where: arg({
      type: 'GoogleAuthWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'GoogleAuthUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.googleAuth.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { GoogleAuthUpdateOneMutation }
