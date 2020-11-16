const { mutationField, arg } = require('@nexus/schema')

const KeyCreateOneMutation = mutationField('createOneKey', {
  type: 'Key',
  nullable: false,
  args: {
    data: arg({
      type: 'KeyCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.key.create({
      data,
      ...select,
    })
  },
})
module.exports = { KeyCreateOneMutation }
