const { mutationField, arg } = require('@nexus/schema')

const ListCreateOneMutation = mutationField('createOneList', {
  type: 'List',
  nullable: false,
  args: {
    data: arg({
      type: 'ListCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.list.create({
      data,
      ...select,
    })
  },
})
module.exports = { ListCreateOneMutation }
