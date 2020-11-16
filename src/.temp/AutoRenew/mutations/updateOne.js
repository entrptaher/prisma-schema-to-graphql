const { mutationField, arg } = require('@nexus/schema')

const AutoRenewUpdateOneMutation = mutationField('updateOneAutoRenew', {
  type: 'AutoRenew',
  nullable: false,
  args: {
    where: arg({
      type: 'AutoRenewWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'AutoRenewUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.autoRenew.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { AutoRenewUpdateOneMutation }
