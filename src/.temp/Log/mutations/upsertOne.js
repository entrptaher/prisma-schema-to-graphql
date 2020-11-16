const { mutationField, arg } = require('@nexus/schema')

const LogUpsertOneMutation = mutationField('upsertOneLog', {
  type: 'Log',
  nullable: false,
  args: {
    where: arg({
      type: 'LogWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'LogCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'LogUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.log.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { LogUpsertOneMutation }
