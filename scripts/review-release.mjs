import fs from 'node:fs';
import {collectInventory,assertReleaseReady} from './editorial-inventory.mjs';
import {resolveSitePolicy} from '../src/site-policy.mjs';
const inventory=collectInventory(process.cwd(),{skipLegacy:process.env.SKIP_LEGACY==='true'});
fs.mkdirSync('audit-reports',{recursive:true});
fs.writeFileSync('audit-reports/editorial-review.json',JSON.stringify(inventory,null,2)+'\n');
console.log('Revisão editorial: '+JSON.stringify(inventory.counts));
if(resolveSitePolicy().indexed)assertReleaseReady(inventory);
