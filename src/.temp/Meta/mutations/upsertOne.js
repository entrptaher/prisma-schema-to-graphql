const { mutationField, arg } = require('@nexus/schema')

const MetaUpsertOneMutation = mutationField('upsertOneMeta', {
  type: 'Meta',
  nullable: false,
  args: {
    where: arg({
      type: 'MetaWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'MetaCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'MetaUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.meta.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { MetaUpsertOneMutation }
