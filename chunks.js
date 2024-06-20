/* esm.sh - esbuild bundle(vinxi@0.3.12/lib/chunks) denonext production */
import { readFileSync as p } from 'node:fs';
import { join as k } from 'https://esm.sh/v135/vinxi@0.3.12/X-ZS9AdmlueGkvcGx1Z2luLWRpcmVjdGl2ZXMscm9sbHVwLHVXZWJTb2NrZXRzLmpz/denonext/lib/path.js';
import { join as a } from 'https://esm.sh/v135/pathe@1.1.2/denonext/pathe.mjs';

function c(t) {
  return a(t.outDir, t.base, '.vite', 'manifest.json');
  // return l('vite/package.json').version.startsWith('5')
  //   ? a(t.outDir, t.base, '.vite', 'manifest.json')
  //   : a(t.outDir, t.base, 'manifest.json');
}
var f = 'c_';
function $(t, n, e) {
  let r = t.getRouter(n);
  if (r.target !== 'server') return '';
  try {
    let i = JSON.parse(p(c(r), 'utf-8'));
    return Object.entries(i)
      .filter(([s, o]) => o.file.startsWith(f) && s !== r.handler)
      .map(([s, o], u) => {
        let h = k(r.outDir, r.base, o.file);
        return `
  import * as mod_${u}_${e} from '${h}';
  chunks['${o.file}'] = mod_${u}_${e}
`;
      })
      .join(`
`);
  } catch {
    return '';
  }
}
var P = () => (t) =>
  `
 const chunks = {};
 ${t.config.routers
   .map((e, r) => $(t, e.name, r))
   .join(`
`)}
 export default function app() {
   globalThis.$$chunks = chunks
 }
`;
function v(t) {
  let n = 0;
  for (let e = 0; e < t.length; e++) n += t.charCodeAt(e);
  return n;
}
function y(t) {
  return `${f}${v(t)}`;
}
export { y as chunkify, P as chunksServerVirtualModule, v as hash };
//# sourceMappingURL=chunks.js.map
