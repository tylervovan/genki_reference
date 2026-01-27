import re

def parse_import_txt(file_path):
    data = {} # chapter -> { english -> kana }
    current_chapter = None
    in_vocab = False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line.startswith('=== LESSON'):
                match = re.search(r'LESSON (\d+):', line)
                if match:
                    current_chapter = int(match.group(1))
                    if current_chapter not in data:
                        data[current_chapter] = {}
            
            if line.startswith('[VOCABULARY'):
                in_vocab = True
                continue
            if line.startswith('Category |'):
                continue
            if line.startswith('---') or line.startswith('==='):
                in_vocab = False
            
            if in_vocab and current_chapter and current_chapter >= 3:
                parts = [p.strip() for p in line.split('|')]
                if len(parts) >= 5:
                    kana = parts[1]
                    english = parts[4]
                    if english:
                        data[current_chapter][english] = kana
    return data

def update_genki_lessons(import_data, ts_file_path):
    with open(ts_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Relaxed regex
    pattern = re.compile(r'(?P<indent>\s*)"label":\s*"(?P<label>.*?)",\s*\n\s*"subValue":\s*"(?P<subVal>.*?)",\s*\n\s*"chapter":\s*(?P<chap>\d+)')
    
    print(f"Matches found: {len(pattern.findall(content))}")

    def replacement(match):
        indent = match.group('indent')
        label = match.group('label')
        sub_val = match.group('subVal')
        chapter = int(match.group('chap'))
        
        if chapter >= 3 and chapter <= 10:
            if chapter in import_data:
                # Try exact match
                if label in import_data[chapter]:
                    kana = import_data[chapter][label]
                    print(f"Updating: {label} -> {kana}")
                    # Fix indent: match.group('indent') captured the newline before label + indent.
                    # Wait, indent matches \s* at start.
                    # In regex: (?P<indent>\s*)"label"
                    # If matching starts after "id": "...",\n
                    # indent will be \n + spaces.
                    
                    # We want to insert "value": "...",
                    # It should be at the same indentation level as "label".
                    # If indent starts with \n, we need to be careful.
                    
                    # Let's just construct the whole block cleanly.
                    # We'll assume indent ends with the spaces for the current level.
                    
                    # If indent is "\n            ", then we use that for new lines.
                    
                    new_block = f'{indent}"label": "{label}",{indent}"value": "{kana}",{indent}"subValue": "{sub_val}",{indent}"chapter": {chapter}'
                    return new_block
                else:
                    print(f"Label not found in import data: '{label}' (Chapter {chapter})")
            else:
                 print(f"Chapter not in import data: {chapter}")
        
        return match.group(0)

    new_content = pattern.sub(replacement, content)
    
    if new_content != content:
        print("Writing changes...")
        with open(ts_file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    else:
        print("No changes made.")

if __name__ == '__main__':
    import_data = parse_import_txt('imports/import.txt')
    update_genki_lessons(import_data, 'app/data/genki-lessons.ts')
