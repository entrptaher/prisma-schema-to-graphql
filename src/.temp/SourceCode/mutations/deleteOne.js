const { mutationField, arg } = require('@nexus/schema')

const SourceCodeDeleteOneMutation = mutationField('deleteOneSourceCode', {
  type: 'SourceCode',
  nullable: true,
  args: {
    where: arg({
      type: 'SourceCodeWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.sourceCode.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SourceCodeDeleteOneMutation }
