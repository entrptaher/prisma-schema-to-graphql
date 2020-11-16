const { queryField, arg } = require('@nexus/schema')

const GoogleSheetFindOneQuery = queryField('findOneGoogleSheet', {
  type: 'GoogleSheet',
  nullable: true,
  args: {
    where: arg({
      type: 'GoogleSheetWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.googleSheet.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { GoogleSheetFindOneQuery }
