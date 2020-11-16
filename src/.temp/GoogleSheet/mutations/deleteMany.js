const { mutationField, arg } = require('@nexus/schema')

const GoogleSheetDeleteManyMutation = mutationField('deleteManyGoogleSheet', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'GoogleSheetWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.googleSheet.deleteMany({ where })
  },
})
module.exports = { GoogleSheetDeleteManyMutation }
