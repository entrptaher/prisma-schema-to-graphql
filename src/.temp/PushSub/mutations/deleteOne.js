const { mutationField, arg } = require('@nexus/schema')

const PushSubDeleteOneMutation = mutationField('deleteOnePushSub', {
  type: 'PushSub',
  nullable: true,
  args: {
    where: arg({
      type: 'PushSubWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.pushSub.delete({
      where,
      ...select,
    })
  },
})
module.exports = { PushSubDeleteOneMutation }
