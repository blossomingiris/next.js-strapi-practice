/**
 * user-entry controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
  'api::user-entry.user-entry',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params
      const entity = await strapi.db
        .query('api::user-entry.user-entry')
        .findOne({
          where: { slug: id },
        })
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

      return this.transformResponse(sanitizedEntity)
    },
  }),
)
