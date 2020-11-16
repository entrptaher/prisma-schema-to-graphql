const { mutationField, arg } = require('@nexus/schema')

const ScreenshotDeleteOneMutation = mutationField('deleteOneScreenshot', {
  type: 'Screenshot',
  nullable: true,
  args: {
    where: arg({
      type: 'ScreenshotWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.screenshot.delete({
      where,
      ...select,
    })
  },
})
module.exports = { ScreenshotDeleteOneMutation }
