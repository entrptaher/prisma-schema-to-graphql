const { mutationField, arg } = require('@nexus/schema')

const ListDeleteOneMutation = mutationField('deleteOneList', {
  type: 'List',
  nullable: true,
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.list.delete({
      where,
      ...select,
    })
  },
})
module.exports = { ListDeleteOneMutation }
