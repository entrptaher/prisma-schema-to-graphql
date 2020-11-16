const { queryField, arg } = require('@nexus/schema')

const ScreenshotAggregateQuery = queryField('aggregateScreenshot', {
  type: 'AggregateScreenshot',
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
    return prisma.screenshot.aggregate({ ...args, ...select })
  },
})
module.exports = { ScreenshotAggregateQuery }
