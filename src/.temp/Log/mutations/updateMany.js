const { mutationField, arg } = require('@nexus/schema')

const LogUpdateManyMutation = mutationField('updateManyLog', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'LogWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'LogUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.log.updateMany(args)
  },
})
module.exports = { LogUpdateManyMutation }
