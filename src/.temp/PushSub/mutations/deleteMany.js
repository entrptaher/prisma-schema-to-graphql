const { mutationField, arg } = require('@nexus/schema')

const PushSubDeleteManyMutation = mutationField('deleteManyPushSub', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PushSubWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.pushSub.deleteMany({ where })
  },
})
module.exports = { PushSubDeleteManyMutation }
