const { mutationField, arg } = require('@nexus/schema')

const MetaDeleteOneMutation = mutationField('deleteOneMeta', {
  type: 'Meta',
  nullable: true,
  args: {
    where: arg({
      type: 'MetaWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.meta.delete({
      where,
      ...select,
    })
  },
})
module.exports = { MetaDeleteOneMutation }
