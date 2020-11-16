const { mutationField, arg } = require('@nexus/schema')

const SessionListUpdateOneMutation = mutationField('updateOneSessionList', {
  type: 'SessionList',
  nullable: false,
  args: {
    where: arg({
      type: 'SessionListWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SessionListUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.sessionList.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SessionListUpdateOneMutation }
