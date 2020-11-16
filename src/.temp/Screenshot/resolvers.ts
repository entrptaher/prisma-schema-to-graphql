import { ModuleContext } from '@graphql-modules/core'
import { PrismaProvider } from '../common/Prisma.provider'

export default {
  Query: {
    findOneScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.findOne(args)
    },
    findFirstScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.findFirst(args)
    },
    findManyScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.findMany(args)
    },
    findManyScreenshotCount: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.count(args)
    },
    aggregateScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.aggregate(args)
    },
  },
  Mutation: {
    createOneScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.create(args)
    },
    updateOneScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.update(args)
    },
    deleteOneScreenshot: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.delete(args)
    },
    upsertOneScreenshot: async (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.upsert(args)
    },
    deleteManyScreenshot: async (
      _parent,
      args,
      { injector }: ModuleContext,
    ) => {
      return injector.get(PrismaProvider).screenshot.deleteMany(args)
    },
    updateManyScreenshot: (_parent, args, { injector }: ModuleContext) => {
      return injector.get(PrismaProvider).screenshot.updateMany(args)
    },
  },
}
