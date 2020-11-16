const { mutationField, arg } = require('@nexus/schema')

const ScreenshotDeleteManyMutation = mutationField('deleteManyScreenshot', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ScreenshotWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.screenshot.deleteMany({ where })
  },
})
module.exports = { ScreenshotDeleteManyMutation }
