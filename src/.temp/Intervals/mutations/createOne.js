const { mutationField, arg } = require('@nexus/schema')

const IntervalsCreateOneMutation = mutationField('createOneIntervals', {
  type: 'Intervals',
  nullable: false,
  args: {
    data: arg({
      type: 'IntervalsCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.intervals.create({
      data,
      ...select,
    })
  },
})
module.exports = { IntervalsCreateOneMutation }
