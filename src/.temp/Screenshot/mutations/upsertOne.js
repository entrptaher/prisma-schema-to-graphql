const { mutationField, arg } = require('@nexus/schema')

const ScreenshotUpsertOneMutation = mutationField('upsertOneScreenshot', {
  type: 'Screenshot',
  nullable: false,
  args: {
    where: arg({
      type: 'ScreenshotWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'ScreenshotCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'ScreenshotUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.screenshot.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { ScreenshotUpsertOneMutation }
