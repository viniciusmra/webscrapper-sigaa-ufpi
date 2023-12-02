from bs4 import BeautifulSoup
import requests
from urllib.parse import urljoin
import json

base_url = 'https://sigaa.ufpi.br/sigaa/public/curso/'
url = 'https://sigaa.ufpi.br/sigaa/public/curso/lista.jsf?nivel=G&aba=p-graduacao'
# response = requests.get(url)
# html = response.content
# soup = BeautifulSoup(html, 'html.parser')

# linhas = soup.find_all('tr')

# for linha in linhas:
#     celulas = linha.find_all('td')
#     if(len(celulas) > 0):
#         if(celulas[0].text.replace('\t', '').replace('\n', '') == 'CIÊNCIA DA COMPUTAÇÃO'):
#             print(celulas[4].find_all('a')[0].get('href'))
#             link = celulas[4].find_all('a')[0].get('href')
#             response = requests.get(urljoin(base_url, link))
#             html = response.content

#             soup = BeautifulSoup(html, 'html.parser')
#             print(soup)


def get_graduation_data(url):
    data = {}
    response = requests.get(url)
    html = response.content
    soup = BeautifulSoup(html, 'html.parser')
    
    tables = soup.find_all('table')
    rows = tables[1].find_all('tr')
    current_center = ''
    
    for row in rows:
        columns = row.find_all('td')
        if(len(columns) == 1):
            center = columns[0].text.replace('\t', '').replace('\n', '')[1:].rstrip()
            data[center] = {}
            current_center = center
        elif(len(columns) == 5):
            course_name = columns[0].text.replace('\t', '').replace('\n', '').rstrip()
            course_location = columns[1].text.replace('\t', '').replace('\n', '').rstrip()
            course_modality = columns[2].text.replace('\t', '').replace('\n', '').rstrip()
            course_coordinator = columns[3].text.replace('\t', '').replace('\n', '').rstrip()
            course_url= columns[4].find_all('a')[0].get('href').rstrip()
            
            # Isolar o parametro Id de cada curso
            start = course_url.find('id=') + 3
            end = course_url.find('&', start)
            id_value = course_url[start:end] if end != -1 else course_url[start:]

            data[current_center][course_name] = {
                'location': course_location,
                'modality': course_modality,
                'coordinator': course_coordinator,
                'url': course_url,
                'id': id_value
            }

    with open("data.json", 'w') as json_file:
        json.dump(data, json_file)


get_graduation_data(url)

