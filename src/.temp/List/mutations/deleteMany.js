const { mutationField, arg } = require('@nexus/schema')

const ListDeleteManyMutation = mutationField('deleteManyList', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ListWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.list.deleteMany({ where })
  },
})
module.exports = { ListDeleteManyMutation }
