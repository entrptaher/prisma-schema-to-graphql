const { mutationField, arg } = require('@nexus/schema')

const SourceCodeUpsertOneMutation = mutationField('upsertOneSourceCode', {
  type: 'SourceCode',
  nullable: false,
  args: {
    where: arg({
      type: 'SourceCodeWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SourceCodeCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SourceCodeUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sourceCode.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SourceCodeUpsertOneMutation }
