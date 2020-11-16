const { mutationField, arg } = require('@nexus/schema')

const ActivityDeleteManyMutation = mutationField('deleteManyActivity', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ActivityWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.activity.deleteMany({ where })
  },
})
module.exports = { ActivityDeleteManyMutation }
