const { mutationField, arg } = require('@nexus/schema')

const GoogleSheetUpdateOneMutation = mutationField('updateOneGoogleSheet', {
  type: 'GoogleSheet',
  nullable: false,
  args: {
    where: arg({
      type: 'GoogleSheetWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'GoogleSheetUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.googleSheet.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { GoogleSheetUpdateOneMutation }
