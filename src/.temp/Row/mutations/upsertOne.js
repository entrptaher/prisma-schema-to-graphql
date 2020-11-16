const { mutationField, arg } = require('@nexus/schema')

const RowUpsertOneMutation = mutationField('upsertOneRow', {
  type: 'Row',
  nullable: false,
  args: {
    where: arg({
      type: 'RowWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'RowCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'RowUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.row.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { RowUpsertOneMutation }
