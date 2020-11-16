const { mutationField, arg } = require('@nexus/schema')

const SessionListCreateOneMutation = mutationField('createOneSessionList', {
  type: 'SessionList',
  nullable: false,
  args: {
    data: arg({
      type: 'SessionListCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.sessionList.create({
      data,
      ...select,
    })
  },
})
module.exports = { SessionListCreateOneMutation }
