const { mutationField, arg } = require('@nexus/schema')

const SessionCreateOneMutation = mutationField('createOneSession', {
  type: 'Session',
  nullable: false,
  args: {
    data: arg({
      type: 'SessionCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.session.create({
      data,
      ...select,
    })
  },
})
module.exports = { SessionCreateOneMutation }
