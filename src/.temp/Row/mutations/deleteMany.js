const { mutationField, arg } = require('@nexus/schema')

const RowDeleteManyMutation = mutationField('deleteManyRow', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'RowWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.row.deleteMany({ where })
  },
})
module.exports = { RowDeleteManyMutation }
