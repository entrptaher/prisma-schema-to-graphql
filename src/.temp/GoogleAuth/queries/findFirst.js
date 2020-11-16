const { queryField, arg } = require('@nexus/schema')

const GoogleAuthFindFirstQuery = queryField('findFirstGoogleAuth', {
  type: 'GoogleAuth',
  nullable: true,
  args: {
    where: 'GoogleAuthWhereInput',
    orderBy: arg({ type: 'GoogleAuthOrderByInput', list: true }),
    cursor: 'GoogleAuthWhereUniqueInput',
    distinct: 'GoogleAuthDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleAuth.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { GoogleAuthFindFirstQuery }
