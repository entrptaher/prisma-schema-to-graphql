const { mutationField, arg } = require('@nexus/schema')

const SourceCodeDeleteManyMutation = mutationField('deleteManySourceCode', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SourceCodeWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.sourceCode.deleteMany({ where })
  },
})
module.exports = { SourceCodeDeleteManyMutation }
