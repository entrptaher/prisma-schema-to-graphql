const { queryField, arg } = require('@nexus/schema')

const PreservedDataFindOneQuery = queryField('findOnePreservedData', {
  type: 'PreservedData',
  nullable: true,
  args: {
    where: arg({
      type: 'PreservedDataWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.preservedData.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { PreservedDataFindOneQuery }
