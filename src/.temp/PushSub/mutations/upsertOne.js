const { mutationField, arg } = require('@nexus/schema')

const PushSubUpsertOneMutation = mutationField('upsertOnePushSub', {
  type: 'PushSub',
  nullable: false,
  args: {
    where: arg({
      type: 'PushSubWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'PushSubCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'PushSubUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.pushSub.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { PushSubUpsertOneMutation }
