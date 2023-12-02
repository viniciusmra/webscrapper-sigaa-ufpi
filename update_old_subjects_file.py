import json

# Abre o arquivo JSON
with open('subjects.json', 'r', encoding='utf-8') as arquivo_json:
    subjects_data = json.load(arquivo_json)

for subject in subjects_data:
    del subject['schedule']
# # Agora 'dados' contém a lista de dicionários do JSON
# new_subjects = []
# #print(dados[0])

# for subject in subjects_data:
#     new_subjects = {}
#     new_subjects['code'] = subject['type']
#     dict[subject['code']] = {}
#     dict[subject['code']]['type'] = subject['type']
#     dict[subject['code']]['name'] = subject['name']
#     dict[subject['code']]['semester'] = subject['semester']
#     dict[subject['code']]['prerequisites'] = subject['prerequisites']
#     dict[subject['code']]['workload'] = subject['workload']
#     #dict[subject['code']]['schedule'] = subject['schedule']

with open('data.json', 'r', encoding='utf-8') as arquivo_json:
    data = json.load(arquivo_json)

data['CCN - CENTRO DE CIENCIAS DA NATUREZA']['CIÊNCIA DA COMPUTAÇÃO']['subjects'] = subjects_data

with open("data2.json", 'w') as json_file:
    json.dump(data, json_file)