const { mutationField, arg } = require('@nexus/schema')

const PreservedDataUpdateOneMutation = mutationField('updateOnePreservedData', {
  type: 'PreservedData',
  nullable: false,
  args: {
    where: arg({
      type: 'PreservedDataWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'PreservedDataUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.preservedData.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { PreservedDataUpdateOneMutation }
