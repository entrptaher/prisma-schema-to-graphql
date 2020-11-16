const { mutationField, arg } = require('@nexus/schema')

const SourceCodeUpdateOneMutation = mutationField('updateOneSourceCode', {
  type: 'SourceCode',
  nullable: false,
  args: {
    where: arg({
      type: 'SourceCodeWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SourceCodeUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.sourceCode.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SourceCodeUpdateOneMutation }
