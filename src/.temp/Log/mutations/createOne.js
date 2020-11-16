const { mutationField, arg } = require('@nexus/schema')

const LogCreateOneMutation = mutationField('createOneLog', {
  type: 'Log',
  nullable: false,
  args: {
    data: arg({
      type: 'LogCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.log.create({
      data,
      ...select,
    })
  },
})
module.exports = { LogCreateOneMutation }
