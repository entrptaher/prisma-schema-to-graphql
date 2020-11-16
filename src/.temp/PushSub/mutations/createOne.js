const { mutationField, arg } = require('@nexus/schema')

const PushSubCreateOneMutation = mutationField('createOnePushSub', {
  type: 'PushSub',
  nullable: false,
  args: {
    data: arg({
      type: 'PushSubCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.pushSub.create({
      data,
      ...select,
    })
  },
})
module.exports = { PushSubCreateOneMutation }
