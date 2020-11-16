const { mutationField, arg } = require('@nexus/schema')

const GoogleAuthCreateOneMutation = mutationField('createOneGoogleAuth', {
  type: 'GoogleAuth',
  nullable: false,
  args: {
    data: arg({
      type: 'GoogleAuthCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.googleAuth.create({
      data,
      ...select,
    })
  },
})
module.exports = { GoogleAuthCreateOneMutation }
