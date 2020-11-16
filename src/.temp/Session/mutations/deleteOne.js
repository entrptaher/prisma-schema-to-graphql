const { mutationField, arg } = require('@nexus/schema')

const SessionDeleteOneMutation = mutationField('deleteOneSession', {
  type: 'Session',
  nullable: true,
  args: {
    where: arg({
      type: 'SessionWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.session.delete({
      where,
      ...select,
    })
  },
})
module.exports = { SessionDeleteOneMutation }
