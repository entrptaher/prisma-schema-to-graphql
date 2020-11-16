const { mutationField, arg } = require('@nexus/schema')

const SessionUpdateOneMutation = mutationField('updateOneSession', {
  type: 'Session',
  nullable: false,
  args: {
    where: arg({
      type: 'SessionWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'SessionUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.session.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { SessionUpdateOneMutation }
