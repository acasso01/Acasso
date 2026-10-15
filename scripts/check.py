from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
import re,sys
root=Path(__file__).resolve().parents[1]
class Doc(HTMLParser):
 def __init__(self,path):
  super().__init__(); self.path=path;self.refs=[];self.ids=set();self.h1=0;self.errors=[];self.title=False;self.description=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='h1':self.h1+=1
  if tag=='title':self.title=True
  if tag=='meta' and a.get('name')=='description':self.description=True
  if 'id' in a:
   if a['id'] in self.ids:self.errors.append('Duplicate ID '+a['id'])
   self.ids.add(a['id'])
  if tag=='img' and 'alt' not in a:self.errors.append('Missing image alternative')
  for key in ['src','href']:
   if key in a:self.refs.append(a[key])
docs={}
for path in root.glob('*.html'):
 d=Doc(path);d.feed(path.read_text());docs[path.name]=d
errors=[]
for name,d in docs.items():
 if d.h1!=1:errors.append(f'{name}: expected one h1, got {d.h1}')
 if not(d.title and d.description):errors.append(name+': missing metadata')
 errors += [name+': '+x for x in d.errors]
 for ref in d.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  target=unquote(u.path) or name
  if not(root/target).is_file():errors.append(f'{name}: missing {ref}')
  elif u.fragment and target in docs and u.fragment not in docs[target].ids:errors.append(f'{name}: missing anchor {ref}')
for f in [*root.glob('*.html'),root/'site.js',root/'styles.css']:
 if re.search(r'(?i)(?:AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |EC )?PRIVATE KEY|service_role\s*[=:]\s*["\'][A-Za-z0-9])',f.read_text()):errors.append(f.name+': possible secret')
if errors:print('\n'.join(errors));sys.exit(1)
print(f'PASS: {len(docs)} pages, local links and anchors, metadata, image alternatives, unique IDs, one h1 per page, and secret-pattern scan.')
