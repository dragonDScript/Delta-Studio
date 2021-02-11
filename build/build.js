const { join } = require('path')
const { build } = require('esbuild')
const { createReadStream, createWriteStream } = require('fs')

const banner = '/* eslint-disable */'

// Main
build({
  platform: 'node',
  outfile: join(process.cwd(), 'dist', 'main.js'),
  bundle: true,
  entryPoints: [join(process.cwd(), 'src', 'main', 'main.ts')],
  minify: process.env.NODE_ENV === 'development',
  external: ['electron'],
  banner
}).then(() => {
  createReadStream(join(process.cwd(), 'src', 'renderer', 'index.html')).pipe(createWriteStream(join(process.cwd(), 'dist', 'index.html')))
  renderer().then(() => process.exit(0))
})

// Renderer
const renderer = () => build({
  watch: process.env.NODE_ENV === 'development',
  outfile: join(process.cwd(), 'dist', 'renderer.js'),
  minify: process.env.NODE_ENV === 'development',
  bundle: true,
  entryPoints: [join(process.cwd(), 'src', 'renderer', 'main.ts')],
  banner
})
