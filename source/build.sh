#!/bin/bash
# usage: build.sh out.html stage files...
cd "$(dirname "$0")"
python3 - "$@" <<'P'
import sys
out=sys.argv[1]; files=sys.argv[2:]
h=open('p6-v17.html').read()
k=h.rindex('<script>Studio.start();</script>')
add=''.join('<script>\n'+open(f).read()+'</script>\n' for f in ['stagekit.js']+files)
h=h[:k]+add+h[k:]
open(out,'w').write(h)
i=h.index('<title>'); p=h[i:].rstrip()
if p.endswith('</html>'): p=p[:-7].rstrip()+'\n'
open(out.replace('.html','.page.html'),'w').write(p); print('built',out)
P
