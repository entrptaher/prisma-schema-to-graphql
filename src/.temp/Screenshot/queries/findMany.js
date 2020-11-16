const { queryField, arg } = require('@nexus/schema')

const ScreenshotFindManyQuery = queryField('findManyScreenshot', {
  type: 'Screenshot',
  list: [true],
  args: {
    where: 'ScreenshotWhereInput',
    orderBy: arg({ type: 'ScreenshotOrderByInput', list: true }),
    cursor: 'ScreenshotWhereUniqueInput',
    distinct: 'ScreenshotDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.screenshot.findMany({
      ...args,
      ...select,
    })
  },
})
module.exports = { ScreenshotFindManyQuery }
