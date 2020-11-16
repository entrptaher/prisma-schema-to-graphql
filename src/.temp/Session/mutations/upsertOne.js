const { mutationField, arg } = require('@nexus/schema')

const SessionUpsertOneMutation = mutationField('upsertOneSession', {
  type: 'Session',
  nullable: false,
  args: {
    where: arg({
      type: 'SessionWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'SessionCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'SessionUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { SessionUpsertOneMutation }
