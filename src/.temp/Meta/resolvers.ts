import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.findOne(args)
    },
    findFirstMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.findFirst(args)
    },
    findManyMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.findMany(args)
    },
    findManyMetaCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.count(args)
    },
    aggregateMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.aggregate(args)
    },
  },
  Mutation: {
    createOneMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.create(args)
    },
    updateOneMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.update(args)
    },
    deleteOneMeta: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.delete(args)
    },
    upsertOneMeta: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.upsert(args)
    },
    deleteManyMeta: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.deleteMany(args)
    },
    updateManyMeta: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).meta.updateMany(args)
    },
  },
}
