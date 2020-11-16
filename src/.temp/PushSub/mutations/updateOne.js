const { mutationField, arg } = require('@nexus/schema')

const PushSubUpdateOneMutation = mutationField('updateOnePushSub', {
  type: 'PushSub',
  nullable: false,
  args: {
    where: arg({
      type: 'PushSubWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'PushSubUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.pushSub.update({
      where,
      data,
      ...select,
    })
  },
})
module.exports = { PushSubUpdateOneMutation }
