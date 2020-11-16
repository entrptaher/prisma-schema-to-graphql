const { mutationField, arg } = require('@nexus/schema')

const RowUpdateManyMutation = mutationField('updateManyRow', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'RowWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'RowUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.row.updateMany(args)
  },
})
module.exports = { RowUpdateManyMutation }
