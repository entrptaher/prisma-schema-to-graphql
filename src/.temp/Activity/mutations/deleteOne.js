const { mutationField, arg } = require('@nexus/schema')

const ActivityDeleteOneMutation = mutationField('deleteOneActivity', {
  type: 'Activity',
  nullable: true,
  args: {
    where: arg({
      type: 'ActivityWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.activity.delete({
      where,
      ...select,
    })
  },
})
module.exports = { ActivityDeleteOneMutation }
