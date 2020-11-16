const { mutationField, arg } = require('@nexus/schema')

const PreservedDataUpsertOneMutation = mutationField('upsertOnePreservedData', {
  type: 'PreservedData',
  nullable: false,
  args: {
    where: arg({
      type: 'PreservedDataWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'PreservedDataCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'PreservedDataUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.preservedData.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { PreservedDataUpsertOneMutation }
