import json
from bs4 import BeautifulSoup

current_semester = '2023.2'
current_course = 'CIÊNCIA DA COMPUTAÇÃO'
#abrir classes

classes_data = {}

if current_semester not in classes_data:
    classes_data[current_semester] = {}

if current_course not in classes_data[current_semester]:
    classes_data[current_semester][current_course] = {}

# Abre o arquivo HTML
with open('pagina_resultado.html', 'r', encoding='utf-8') as arquivo:
    conteudo_html = arquivo.read()

# Passa o conteúdo HTML para o BeautifulSoup
soup = BeautifulSoup(conteudo_html, 'html.parser')

subjects = soup.find_all('table', class_='listagem')
# title = subjects[0].find_all('a')
# print(title[0].text)
# body = subjects[0].find_all('tbody')
# classes = body[0].find_all('tr')
# schedule = classes[0].find_all('td', class_='horario')
# print(schedule[0].text)
# thead = tables[0].find_all('thead')
# tr = thead[0].find_all('tr')
# td = tr[0].find_all('td')

# print(len(tr))
# print(tr[0])
# Agora você pode usar o 'soup' para analisar e extrair dados
# por exemplo: soup.find_all('tag') ou soup.select('seletor')

for subject in subjects:
    full_name = subject.find_all('a')[0].text.strip()
    name_split = full_name.split(" - ", 1)
    code = name_split[0]
    name = name_split[1]
    if code not in classes_data[current_semester]:
        classes_data[current_semester][current_course][code] = {}
    classes_data[current_semester][current_course][code]['name'] = name 
    body = subject.find_all('tbody')
    subject_classes = body[0].find_all('tr')
    for subject_class in subject_classes:
        columns = subject_class.find_all('td')
        class_number = columns[1].text.strip()
        professor_name = columns[2].find_all('a')[0].text.strip()
        spots_number =  columns[3].text.strip()
        schedule = columns[4].text.strip()

        classes_data[current_semester][current_course][code][class_number] = {}
        classes_data[current_semester][current_course][code][class_number]["professor"] = professor_name
        classes_data[current_semester][current_course][code][class_number]["spots"] = spots_number
        classes_data[current_semester][current_course][code][class_number]["schedule"] = schedule
        
        
    
    
with open("classes.json", 'w') as json_file:
        json.dump(classes_data, json_file)
