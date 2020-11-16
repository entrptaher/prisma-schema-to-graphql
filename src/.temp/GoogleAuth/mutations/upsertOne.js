const { mutationField, arg } = require('@nexus/schema')

const GoogleAuthUpsertOneMutation = mutationField('upsertOneGoogleAuth', {
  type: 'GoogleAuth',
  nullable: false,
  args: {
    where: arg({
      type: 'GoogleAuthWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'GoogleAuthCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'GoogleAuthUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleAuth.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { GoogleAuthUpsertOneMutation }
