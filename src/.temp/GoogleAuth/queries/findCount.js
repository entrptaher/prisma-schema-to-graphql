const { queryField, arg } = require('@nexus/schema')

const GoogleAuthFindCountQuery = queryField('findManyGoogleAuthCount', {
  type: 'Int',
  args: {
    where: 'GoogleAuthWhereInput',
    orderBy: arg({ type: 'GoogleAuthOrderByInput', list: true }),
    cursor: 'GoogleAuthWhereUniqueInput',
    distinct: 'GoogleAuthDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.googleAuth.count(args)
  },
})
module.exports = { GoogleAuthFindCountQuery }
