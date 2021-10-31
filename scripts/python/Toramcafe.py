import requests
from bs4 import BeautifulSoup
import time
#"[A-Z][a-z\&\'\(\)\-\.\[\]\★\♪\:]+"
ti = time.time()

urls = ["https://toramcafe.com/items-a/", "https://toramcafe.com/items-ka/", "https://toramcafe.com/items-sa/", "https://toramcafe.com/items-ta/", "https://toramcafe.com/items-na/", "https://toramcafe.com/items-ha/", "https://toramcafe.com/items-ma/", "https://toramcafe.com/items-ya/", "https://toramcafe.com/items-ra/", "https://toramcafe.com/items-wa/"]

urls += ["https://toramcafe.com/arrow/", "https://toramcafe.com/knife/", "https://toramcafe.com/shield/"]

urls += []

items = dict()

print("Updating data...")

for url in urls:
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    tabs = soup.select(".contentBody div[id*='char'] div")
    for item in tabs:
        if "id" in item.attrs.keys():
            items[item.attrs["id"]] = url+'#'+item.attrs["id"]

print("Time elapsed: %ss" % (int((time.time()-ti)*100)/100))

def globalSearch (dataset: dict, string: str):
    item = ''.join(string.strip().split()).lower()
    found = []
    for key in dataset.keys():
        if key.lower().find(item) != -1:
            found.append(dataset[key])
    return found

def itemSearch (string):
    return globalSearch(items, string)