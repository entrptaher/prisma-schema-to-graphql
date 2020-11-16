const { mutationField, arg } = require('@nexus/schema')

const GoogleSheetCreateOneMutation = mutationField('createOneGoogleSheet', {
  type: 'GoogleSheet',
  nullable: false,
  args: {
    data: arg({
      type: 'GoogleSheetCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.googleSheet.create({
      data,
      ...select,
    })
  },
})
module.exports = { GoogleSheetCreateOneMutation }
