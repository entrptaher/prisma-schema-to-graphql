const { mutationField, arg } = require('@nexus/schema')

const AutoRenewCreateOneMutation = mutationField('createOneAutoRenew', {
  type: 'AutoRenew',
  nullable: false,
  args: {
    data: arg({
      type: 'AutoRenewCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.autoRenew.create({
      data,
      ...select,
    })
  },
})
module.exports = { AutoRenewCreateOneMutation }
