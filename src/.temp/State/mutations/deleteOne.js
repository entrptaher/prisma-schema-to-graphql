const { mutationField, arg } = require('@nexus/schema')

const StateDeleteOneMutation = mutationField('deleteOneState', {
  type: 'State',
  nullable: true,
  args: {
    where: arg({
      type: 'StateWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.state.delete({
      where,
      ...select,
    })
  },
})
module.exports = { StateDeleteOneMutation }
