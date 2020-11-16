const { mutationField, arg } = require('@nexus/schema')

const LogUpdateOneMutation = mutationField('updateOneLog', {
  type: 'Log',
  nullable: false,
  args: {
    where: arg({
      type: 'LogWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'LogUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.log.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { LogUpdateOneMutation }
