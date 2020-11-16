const { queryField, arg } = require('@nexus/schema')

const RowFindOneQuery = queryField('findOneRow', {
  type: 'Row',
  nullable: true,
  args: {
    where: arg({
      type: 'RowWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.row.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { RowFindOneQuery }
