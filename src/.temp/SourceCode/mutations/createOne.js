const { mutationField, arg } = require('@nexus/schema')

const SourceCodeCreateOneMutation = mutationField('createOneSourceCode', {
  type: 'SourceCode',
  nullable: false,
  args: {
    data: arg({
      type: 'SourceCodeCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.sourceCode.create({
      data,
      ...select,
    })
  },
})
module.exports = { SourceCodeCreateOneMutation }
