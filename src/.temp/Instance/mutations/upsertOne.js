const { mutationField, arg } = require('@nexus/schema')

const InstanceUpsertOneMutation = mutationField('upsertOneInstance', {
  type: 'Instance',
  nullable: false,
  args: {
    where: arg({
      type: 'InstanceWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'InstanceCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'InstanceUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.instance.upsert({
      ...args,
      ...select,
    })
  },
})
module.exports = { InstanceUpsertOneMutation }
