const { mutationField, arg } = require('@nexus/schema')

const ActivityUpdateOneMutation = mutationField('updateOneActivity', {
  type: 'Activity',
  nullable: false,
  args: {
    where: arg({
      type: 'ActivityWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'ActivityUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.activity.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { ActivityUpdateOneMutation }
