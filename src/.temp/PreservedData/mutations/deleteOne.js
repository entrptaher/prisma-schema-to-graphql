const { mutationField, arg } = require('@nexus/schema')

const PreservedDataDeleteOneMutation = mutationField('deleteOnePreservedData', {
  type: 'PreservedData',
  nullable: true,
  args: {
    where: arg({
      type: 'PreservedDataWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.preservedData.delete({
      where,
      ...select,
    })
  },
})
module.exports = { PreservedDataDeleteOneMutation }
