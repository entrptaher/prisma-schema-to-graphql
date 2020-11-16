import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.findOne(args)
    },
    findFirstLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.findFirst(args)
    },
    findManyLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.findMany(args)
    },
    findManyLimitsCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.count(args)
    },
    aggregateLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.aggregate(args)
    },
  },
  Mutation: {
    createOneLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.create(args)
    },
    updateOneLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.update(args)
    },
    deleteOneLimits: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.delete(args)
    },
    upsertOneLimits: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.upsert(args)
    },
    deleteManyLimits: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.deleteMany(args)
    },
    updateManyLimits: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).limits.updateMany(args)
    },
  },
}
