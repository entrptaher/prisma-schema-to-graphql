const { mutationField, arg } = require('@nexus/schema')

const KeyUpsertOneMutation = mutationField('upsertOneKey', {
  type: 'Key',
  nullable: false,
  args: {
    where: arg({
      type: 'KeyWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'KeyCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'KeyUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.key.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { KeyUpsertOneMutation }
