const { mutationField, arg } = require('@nexus/schema')

const KeyDeleteManyMutation = mutationField('deleteManyKey', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'KeyWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.key.deleteMany({ where })
  },
})
module.exports = { KeyDeleteManyMutation }
