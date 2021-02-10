const { join } = require('path')
const { build } = require('esbuild')

// Main
build({
  target: 'node',
  outfile: join(process.cwd(), 'dist', 'main.js'),
  bundle: join(process.cwd(), 'src', 'main', 'main.ts'),
  minify: process.env.NODE_ENV === 'development'
})

// Renderer
build({
  watch: process.env.NODE_ENV === 'development',
  outfile: join(process.cwd(), 'dist', 'renderer.js'),
  minify: process.env.NODE_ENV === 'development',
  bundle: join(process.cwd(), 'src', 'renderer', 'main.ts')
})
