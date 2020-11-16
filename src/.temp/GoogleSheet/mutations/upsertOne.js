const { mutationField, arg } = require('@nexus/schema')

const GoogleSheetUpsertOneMutation = mutationField('upsertOneGoogleSheet', {
  type: 'GoogleSheet',
  nullable: false,
  args: {
    where: arg({
      type: 'GoogleSheetWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'GoogleSheetCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'GoogleSheetUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.googleSheet.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { GoogleSheetUpsertOneMutation }
