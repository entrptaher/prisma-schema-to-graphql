const { mutationField, arg } = require('@nexus/schema')

const StateUpsertOneMutation = mutationField('upsertOneState', {
  type: 'State',
  nullable: false,
  args: {
    where: arg({
      type: 'StateWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'StateCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'StateUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.state.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { StateUpsertOneMutation }
