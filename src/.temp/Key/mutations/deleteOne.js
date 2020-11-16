const { mutationField, arg } = require('@nexus/schema')

const KeyDeleteOneMutation = mutationField('deleteOneKey', {
  type: 'Key',
  nullable: true,
  args: {
    where: arg({
      type: 'KeyWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.key.delete({
      where,
      ...select,
    })
  },
})
module.exports = { KeyDeleteOneMutation }
