module.exports = function(api) {
  api.cache(true)

  return {
    presets: [
      [
        require('@babel/preset-env').default,
        {
          forceAllTransforms: true,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
        },
      ],
    ],
    plugins: [],
  }
}
