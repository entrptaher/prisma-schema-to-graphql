const { mutationField, arg } = require('@nexus/schema')

const KeyUpdateOneMutation = mutationField('updateOneKey', {
  type: 'Key',
  nullable: false,
  args: {
    where: arg({
      type: 'KeyWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'KeyUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.key.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { KeyUpdateOneMutation }
