const { mutationField, arg } = require('@nexus/schema')

const RowCreateOneMutation = mutationField('createOneRow', {
  type: 'Row',
  nullable: false,
  args: {
    data: arg({
      type: 'RowCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.row.create({
      data,
      ...select,
    })
  },
})
module.exports = { RowCreateOneMutation }
