import re

def fix_formatting(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace double newlines + spaces with single newline + spaces
    # But only inside the items I touched.
    # My script produced:
    # "label": "...",\n\n            "value": "...",\n\n            "subValue": "...",\n\n            "chapter": ...
    
    # We can look for `,\n\n` and replace with `,\n`
    
    new_content = re.sub(r',\n\n(\s+)', r',\n\1', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == '__main__':
    fix_formatting('app/data/genki-lessons.ts')

