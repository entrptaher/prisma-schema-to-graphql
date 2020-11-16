const { queryField, arg } = require('@nexus/schema')

const GoogleAuthFindOneQuery = queryField('findOneGoogleAuth', {
  type: 'GoogleAuth',
  nullable: true,
  args: {
    where: arg({
      type: 'GoogleAuthWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.googleAuth.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { GoogleAuthFindOneQuery }
