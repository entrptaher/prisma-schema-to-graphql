const { mutationField, arg } = require('@nexus/schema')

const MetaUpdateManyMutation = mutationField('updateManyMeta', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'MetaWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'MetaUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.meta.updateMany(args)
  },
})
module.exports = { MetaUpdateManyMutation }
