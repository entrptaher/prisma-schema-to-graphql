const { mutationField, arg } = require('@nexus/schema')

const StateUpdateOneMutation = mutationField('updateOneState', {
  type: 'State',
  nullable: false,
  args: {
    where: arg({
      type: 'StateWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'StateUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.state.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { StateUpdateOneMutation }
