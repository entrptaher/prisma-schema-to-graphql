const { mutationField, arg } = require('@nexus/schema')

const IntervalsUpdateOneMutation = mutationField('updateOneIntervals', {
  type: 'Intervals',
  nullable: false,
  args: {
    where: arg({
      type: 'IntervalsWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'IntervalsUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.intervals.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { IntervalsUpdateOneMutation }
