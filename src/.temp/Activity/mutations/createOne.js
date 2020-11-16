const { mutationField, arg } = require('@nexus/schema')

const ActivityCreateOneMutation = mutationField('createOneActivity', {
  type: 'Activity',
  nullable: false,
  args: {
    data: arg({
      type: 'ActivityCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.activity.create({
      data,
      ...select,
    })
  },
})
module.exports = { ActivityCreateOneMutation }
