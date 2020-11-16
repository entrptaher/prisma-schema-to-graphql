const { mutationField, arg } = require('@nexus/schema')

const InstanceCreateOneMutation = mutationField('createOneInstance', {
  type: 'Instance',
  nullable: false,
  args: {
    data: arg({
      type: 'InstanceCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.instance.create({
      data,
      ...select,
    })
  },
})
module.exports = { InstanceCreateOneMutation }
