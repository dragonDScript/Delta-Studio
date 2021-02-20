const { join } = require('path')
const { build } = require('esbuild')
const { createReadStream, createWriteStream } = require('fs')

const banner = '/* eslint-disable */'

const buildRendererCode = () => {
  createReadStream(join(process.cwd(), 'src', 'renderer', 'index.html')).pipe(createWriteStream(join(process.cwd(), 'dist', 'index.html')))
  createReadStream(join(process.cwd(), 'src', 'main', 'preload.js')).pipe(createWriteStream(join(process.cwd(), 'dist', 'preload.js')))
  renderer().then(() => {
    console.log('Built.')
    process.exit(0)
  })
}

// Main
build({
  platform: 'node',
  outfile: join(process.cwd(), 'dist', 'main.js'),
  bundle: true,
  entryPoints: [join(process.cwd(), 'src', 'main', 'main.js')],
  minify: process.env.NODE_ENV === 'development',
  external: ['electron'],
  banner
}).then(buildRendererCode)

// Renderer
const renderer = () => build({
  watch: process.env.NODE_ENV === 'development',
  outfile: join(process.cwd(), 'dist', 'renderer.js'),
  minify: process.env.NODE_ENV === 'development',
  bundle: true,
  entryPoints: [join(process.cwd(), 'src', 'renderer', 'main.jsx')],
  banner,
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  }
})
