const { mutationField, arg } = require('@nexus/schema')

const GoogleSheetUpdateManyMutation = mutationField('updateManyGoogleSheet', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'GoogleSheetWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'GoogleSheetUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.googleSheet.updateMany(args)
  },
})
module.exports = { GoogleSheetUpdateManyMutation }
