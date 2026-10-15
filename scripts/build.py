from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import shutil,subprocess,sys
root=Path(__file__).resolve().parents[1]
subprocess.run([sys.executable,str(root/'scripts/check.py')],check=True)
dist=root/'dist';shutil.rmtree(dist,ignore_errors=True);dist.mkdir()
files={p.name for p in root.glob('*.html')}|{'styles.css','site.js'}
class Assets(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for k,v in attrs:
   if k in ('src','href') and v:
    u=urlsplit(v)
    if not u.scheme and not u.netloc and u.path:files.add(unquote(u.path))
a=Assets()
for p in root.glob('*.html'):a.feed(p.read_text())
files.add('assets/social-preview.png')
files.update(str(f.relative_to(root)) for f in (root/'assets/fonts').glob('*'))
for f in sorted(files):
 dest=dist/f;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(root/f,dest)
print(f'Built {len(files)} public files in dist. Unused original images, research, Git, and documentation excluded.')
