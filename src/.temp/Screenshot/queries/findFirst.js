const { queryField, arg } = require('@nexus/schema')

const ScreenshotFindFirstQuery = queryField('findFirstScreenshot', {
  type: 'Screenshot',
  nullable: true,
  args: {
    where: 'ScreenshotWhereInput',
    orderBy: arg({ type: 'ScreenshotOrderByInput', list: true }),
    cursor: 'ScreenshotWhereUniqueInput',
    distinct: 'ScreenshotDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.screenshot.findFirst({
      ...args,
      ...select,
    })
  },
})
module.exports = { ScreenshotFindFirstQuery }
