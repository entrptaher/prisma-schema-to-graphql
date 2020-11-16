const { mutationField, arg } = require('@nexus/schema')

const ScreenshotCreateOneMutation = mutationField('createOneScreenshot', {
  type: 'Screenshot',
  nullable: false,
  args: {
    data: arg({
      type: 'ScreenshotCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.screenshot.create({
      data,
      ...select,
    })
  },
})
module.exports = { ScreenshotCreateOneMutation }
