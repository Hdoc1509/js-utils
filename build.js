import esbuild from 'esbuild';

esbuild.build({
  entryPoints: [
    'src/arith.js',
    'src/array.js',
    'src/dom.js',
    'src/equation.js',
    'src/form.js',
  ],
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  minify: true,
  target: ['es6'],
});
