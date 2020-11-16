const { mutationField, arg } = require('@nexus/schema')

const ScreenshotUpdateOneMutation = mutationField('updateOneScreenshot', {
  type: 'Screenshot',
  nullable: false,
  args: {
    where: arg({
      type: 'ScreenshotWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'ScreenshotUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.screenshot.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { ScreenshotUpdateOneMutation }
