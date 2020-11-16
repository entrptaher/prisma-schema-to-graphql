const { mutationField, arg } = require('@nexus/schema')

const ActivityUpsertOneMutation = mutationField('upsertOneActivity', {
  type: 'Activity',
  nullable: false,
  args: {
    where: arg({
      type: 'ActivityWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'ActivityCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'ActivityUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.activity.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { ActivityUpsertOneMutation }
