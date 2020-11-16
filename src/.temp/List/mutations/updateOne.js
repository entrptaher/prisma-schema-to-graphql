const { mutationField, arg } = require('@nexus/schema')

const ListUpdateOneMutation = mutationField('updateOneList', {
  type: 'List',
  nullable: false,
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'ListUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.list.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { ListUpdateOneMutation }
