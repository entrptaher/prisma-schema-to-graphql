const { mutationField, arg } = require('@nexus/schema')

const SourceCodeUpdateManyMutation = mutationField('updateManySourceCode', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'SourceCodeWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'SourceCodeUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.sourceCode.updateMany(args)
  },
})
module.exports = { SourceCodeUpdateManyMutation }
