const { queryField, arg } = require('@nexus/schema')

const GoogleAuthFindManyQuery = queryField('findManyGoogleAuth', {
  type: 'GoogleAuth',
  list: [true],
  args: {
    where: 'GoogleAuthWhereInput',
    orderBy: arg({ type: 'GoogleAuthOrderByInput', list: true }),
    cursor: 'GoogleAuthWhereUniqueInput',
    distinct: 'GoogleAuthDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleAuth.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { GoogleAuthFindManyQuery }
