const { mutationField, arg } = require('@nexus/schema')

const RowDeleteOneMutation = mutationField('deleteOneRow', {
  type: 'Row',
  nullable: true,
  args: {
    where: arg({
      type: 'RowWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.row.delete({
      where,
      ...select,
    })
  },
})
module.exports = { RowDeleteOneMutation }
