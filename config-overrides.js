const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    // ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
      ['~_src']: path.resolve(__dirname, './src'),
      ['~_assets']: path.resolve(__dirname, 'src/assets'),
      ['~_components']: path.resolve(__dirname, 'src/Components'),
      ['~_lazy']: path.resolve(__dirname, 'src/Components/Lazy'),
      ['~_pages']: path.resolve(__dirname, 'src/Components/Pages'),
      ['~_landing']: path.resolve(__dirname, 'src/Components/Pages/Landing'),
      ['~_partials']: path.resolve(__dirname, 'src/Components/Partials'),
      ['~_animations']: path.resolve(__dirname, 'src/Components/Partials/Animation'),
      ['~_cards']: path.resolve(__dirname, 'src/Components/Partials/cards'),
      ['~_particles']: path.resolve(__dirname, 'src/Components/Particles'),
      ['~_screens']: path.resolve(__dirname, 'src/Components/Screens'),
      ['~_navigations']: path.resolve(__dirname, 'src/Navigation'),
      ['~_providers']: path.resolve(__dirname, 'src/Providers'),
      ['~_routes']: path.resolve(__dirname, 'src/Routes'),
      ['~_stores']: path.resolve(__dirname, 'src/Store'),
      ['~_templates']: path.resolve(__dirname, 'src/Template'),    
      ['~_utils']: path.resolve(__dirname, 'src/utils'),
      
  }),

  // adjust the underlying workbox
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat("index.html")
    })
  )
);