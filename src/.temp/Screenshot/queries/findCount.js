const { queryField, arg } = require('@nexus/schema')

const ScreenshotFindCountQuery = queryField('findManyScreenshotCount', {
  type: 'Int',
  args: {
    where: 'ScreenshotWhereInput',
    orderBy: arg({ type: 'ScreenshotOrderByInput', list: true }),
    cursor: 'ScreenshotWhereUniqueInput',
    distinct: 'ScreenshotDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.screenshot.count(args)
  },
})
module.exports = { ScreenshotFindCountQuery }
