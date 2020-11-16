const { mutationField, arg } = require('@nexus/schema')

const StateCreateOneMutation = mutationField('createOneState', {
  type: 'State',
  nullable: false,
  args: {
    data: arg({
      type: 'StateCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.state.create({
      data,
      ...select,
    })
  },
})
module.exports = { StateCreateOneMutation }
