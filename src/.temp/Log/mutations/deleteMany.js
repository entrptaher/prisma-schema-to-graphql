const { mutationField, arg } = require('@nexus/schema')

const LogDeleteManyMutation = mutationField('deleteManyLog', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'LogWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.log.deleteMany({ where })
  },
})
module.exports = { LogDeleteManyMutation }
