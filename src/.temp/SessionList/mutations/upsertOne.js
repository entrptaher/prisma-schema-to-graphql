const { mutationField, arg } = require('@nexus/schema')

const SessionListUpsertOneMutation = mutationField('upsertOneSessionList', {
  type: 'SessionList',
  nullable: false,
  args: {
    where: arg({
      type: 'SessionListWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SessionListCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SessionListUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sessionList.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SessionListUpsertOneMutation }
