const { queryField, arg } = require('@nexus/schema')

const ScreenshotFindOneQuery = queryField('findOneScreenshot', {
  type: 'Screenshot',
  nullable: true,
  args: {
    where: arg({
      type: 'ScreenshotWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.screenshot.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { ScreenshotFindOneQuery }
