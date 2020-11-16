const { mutationField, arg } = require('@nexus/schema')

const ScreenshotUpdateManyMutation = mutationField('updateManyScreenshot', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ScreenshotWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'ScreenshotUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.screenshot.updateMany(args)
  },
})
module.exports = { ScreenshotUpdateManyMutation }
