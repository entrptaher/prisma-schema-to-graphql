const { mutationField, arg } = require('@nexus/schema')

const LimitsCreateOneMutation = mutationField('createOneLimits', {
  type: 'Limits',
  nullable: false,
  args: {
    data: arg({
      type: 'LimitsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.limits.create({
      data,
      ...select,
    })
  },
})
module.exports = { LimitsCreateOneMutation }
