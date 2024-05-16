import { defineConfig, isDev } from 'sanity'
import { structureTool } from 'sanity/structure'
import {structure} from './sanity/structure'
import { visionTool } from "@sanity/vision"
import { dataset, projectId } from "./sanity/env"
// import { schema } from "./sanity/schema"
import {schemaTypes} from './sanity/schemas'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './sanity/plugins/customDocumentActions'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  basePath: "/sanity",
  projectId,
  dataset,
  plugins: [
    structureTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})
