const { mutationField, arg } = require('@nexus/schema')

const PreservedDataCreateOneMutation = mutationField('createOnePreservedData', {
  type: 'PreservedData',
  nullable: false,
  args: {
    data: arg({
      type: 'PreservedDataCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.preservedData.create({
      data,
      ...select,
    })
  },
})
module.exports = { PreservedDataCreateOneMutation }
