const { mutationField, arg } = require('@nexus/schema')

const GoogleSheetDeleteOneMutation = mutationField('deleteOneGoogleSheet', {
  type: 'GoogleSheet',
  nullable: true,
  args: {
    where: arg({
      type: 'GoogleSheetWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.googleSheet.delete({
      where,
      ...select,
    })
  },
})
module.exports = { GoogleSheetDeleteOneMutation }
