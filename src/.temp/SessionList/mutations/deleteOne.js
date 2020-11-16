const { mutationField, arg } = require('@nexus/schema')

const SessionListDeleteOneMutation = mutationField('deleteOneSessionList', {
  type: 'SessionList',
  nullable: true,
  args: {
    where: arg({
      type: 'SessionListWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.sessionList.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SessionListDeleteOneMutation }
