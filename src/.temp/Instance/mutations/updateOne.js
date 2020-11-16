const { mutationField, arg } = require('@nexus/schema')

const InstanceUpdateOneMutation = mutationField('updateOneInstance', {
  type: 'Instance',
  nullable: false,
  args: {
    where: arg({
      type: 'InstanceWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'InstanceUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.instance.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { InstanceUpdateOneMutation }
