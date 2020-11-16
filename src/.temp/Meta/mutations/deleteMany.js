const { mutationField, arg } = require('@nexus/schema')

const MetaDeleteManyMutation = mutationField('deleteManyMeta', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'MetaWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.meta.deleteMany({ where })
  },
})
module.exports = { MetaDeleteManyMutation }
