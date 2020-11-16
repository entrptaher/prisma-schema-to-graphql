const { queryField, arg } = require('@nexus/schema')

const SourceCodeFindOneQuery = queryField('findOneSourceCode', {
  type: 'SourceCode',
  nullable: true,
  args: {
    where: arg({
      type: 'SourceCodeWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.sourceCode.findOne({
      where,
      ...select,
    })
  },
})
module.exports = { SourceCodeFindOneQuery }
