const { mutationField, arg } = require('@nexus/schema')

const RowUpdateOneMutation = mutationField('updateOneRow', {
  type: 'Row',
  nullable: false,
  args: {
    where: arg({
      type: 'RowWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'RowUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.row.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { RowUpdateOneMutation }
