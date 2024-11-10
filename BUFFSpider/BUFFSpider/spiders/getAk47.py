import os
import time
from typing import Iterable
import threading
import scrapy
import urllib.parse
import json
from BUFFSpider.items import BUFFItem
from scrapy_redis.spiders import RedisSpider
import requests


class getAk47Spider(RedisSpider):
    name = "getAk47"
    ALLOWED_DOMAINS = ['buff.163.com']
    redis_key = "buff_url"

    # url = "https://buff.163.com/api/market/goods"
    #
    # params = {
    #     'game': "csgo",
    #     'page_num': "1",
    #     'category': "weapon_ak47",
    #     'tab': "selling",
    #     'use_suggestion': "0",
    #     '_': "1730593844648"
    # }
    # url = f'{url}?{urllib.parse.urlencode(params)}'
    #
    # start_urls = [url]

    def _start_requests(self):

        url = "https://buff.163.com/api/market/goods"

        params = {
            'game': "csgo",
            'page_num': "1",
            'category': "weapon_ak47",
            'tab': "selling",
            'use_suggestion': "0",
            '_': "1730593844648"
        }
        headers = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
            'Accept': "application/json, text/javascript, */*; q=0.01",
            'Accept-Encoding': "gzip, deflate, br, zstd",
            'sec-ch-ua-platform': "\"Windows\"",
            'x-requested-with': "XMLHttpRequest",
            'sec-ch-ua': "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            'sec-ch-ua-mobile': "?0",
            'sec-fetch-site': "same-origin",
            'sec-fetch-mode': "cors",
            'sec-fetch-dest': "empty",
            'referer': "https://buff.163.com/market/csgo",
            'accept-language': "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            'priority': "u=1, i",
            'Cookie': "session=1-1eavdT5qZYKkG1J7nnW9iyUfUVTyrD-u4bDa9dbLe1sX2027763368"
        }

        for page_num in range(3):
            params['page_num']=f'{page_num+1}'
            url_ho = f'{url}?{urllib.parse.urlencode(params)}'
            yield scrapy.Request(
                method="GET",
                url=url_ho,
                headers=headers,
                meta={ 'proxy': "http://127.0.0.1:7891"}
                )



    def parse(self, response):
        te=response.text
        buffItems = []

        response_json = json.loads(response.text)
        data = response_json['data']
        items = data['items']
        url = response.url
        for index, item in enumerate(items):
            buffItem = BUFFItem()
            buffItem['name'] = item['name']
            buffItem['short_name'] = item['short_name']
            buffItem['sell_num'] = item['sell_num']
            buffItem['sell_min_price'] = item['sell_min_price']
            buffItem['icon_url'] = item['goods_info']['icon_url']
            buffItem['localized_name'] = item['goods_info']['info']['tags']['exterior']['localized_name']
            buffItems.append(buffItem)

            # url = "https://buff.163.com/api/market/goods/price_history/buff"
            #
            # params = {
            #     'game': "csgo",
            #     'goods_id': f"{item['id']}",
            #     'currency': "CNY",
            #     'days': "30",
            #     'buff_price_type': "2",
            #     'with_sell_num': "false",
            #     '_': "1731210591592"
            # }
            #
            # headers = {
            #     'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
            #     'Accept': "application/json, text/javascript, */*; q=0.01",
            #     'Accept-Encoding': "gzip, deflate, br, zstd",
            #     'sec-ch-ua-platform': "\"Windows\"",
            #     'x-requested-with': "XMLHttpRequest",
            #     'sec-ch-ua': "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            #     'sec-ch-ua-mobile': "?0",
            #     'sec-fetch-site': "same-origin",
            #     'sec-fetch-mode': "cors",
            #     'sec-fetch-dest': "empty",
            #     'referer': "https://buff.163.com/goods/921561?from=market",
            #     'accept-language': "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            #     'Cookie': "session=1-ck4lL_6jCVy_1wTsqyXuyF9zFRh4B2y88XC9E_Fu9ktK2027763368"
            # }
            #
            # response = requests.get(url,
            #                         params=params,
            #                         verify=False,
            #                         headers=headers,
            #                         proxies={'http': "http://127.0.0.1:7891", 'https': "http://127.0.0.1:7891"}
            #                         )
            # res_json=json.loads(response.text)
            # data_json=res_json.get('data','')
            # price_history=data_json.get('price_history','')
            #
            # output_dir = 'saveData/pricesData/'
            # os.makedirs(output_dir, exist_ok=True)
            # file_name =  buffItem['short_name'].replace('|', '_')
            # with open(f'saveData/pricesData/{file_name}.json','w',encoding='UTF-8') as f:
            #     f.write(json.dumps(price_history))
            #     print(price_history)


            # 为每个商品创建一个线程
            thread = threading.Thread(target=self.fetch_price_history, args=(item,))
            thread.start()
            thread.join()


            yield buffItem

            time.sleep(2)





    def parse_next_page(self, response):
        buffItems = []

        response_json = json.loads(response.text)
        data = response_json['data']
        items = data['items']
        url = response.url
        for index, item in enumerate(items):
            buffItem = BUFFItem()
            buffItem['name'] = item['name']
            buffItem['sell_num'] = item['sell_num']
            buffItem['sell_min_price'] = item['sell_min_price']
            buffItem['icon_url'] = item['goods_info']['icon_url']
            buffItem['localized_name'] = item['goods_info']['info']['tags']['exterior']['localized_name']
            buffItems.append(buffItem)
            yield buffItem

    def fetch_price_history(self,item):
        url = "https://buff.163.com/api/market/goods/price_history/buff"
        params = {
            'game': "csgo",
            'goods_id': f"{item['id']}",
            'currency': "CNY",
            'days': "30",
            'buff_price_type': "2",
            'with_sell_num': "false",
            '_': "1731210591592"
        }

        headers = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
            'Accept': "application/json, text/javascript, */*; q=0.01",
            'Accept-Encoding': "gzip, deflate, br, zstd",
            'sec-ch-ua-platform': "\"Windows\"",
            'x-requested-with': "XMLHttpRequest",
            'sec-ch-ua': "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            'sec-ch-ua-mobile': "?0",
            'sec-fetch-site': "same-origin",
            'sec-fetch-mode': "cors",
            'sec-fetch-dest': "empty",
            'referer': "https://buff.163.com/goods/921561?from=market",
            'accept-language': "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            'Cookie': "session=1-ck4lL_6jCVy_1wTsqyXuyF9zFRh4B2y88XC9E_Fu9ktK2027763368"
        }

        try:
            response = requests.get(url,
                                    params=params,
                                    verify=False,
                                    headers=headers,
                                    proxies={'http': "http://127.0.0.1:7891", 'https': "http://127.0.0.1:7891"}
                                    )
            res_json = response.json()
            data_json = res_json.get('data', '')
            price_history = data_json.get('price_history', [])

            if price_history:
                # 设置保存路径
                output_dir = 'saveData/pricesData/'
                os.makedirs(output_dir, exist_ok=True)
                # 文件名
                file_name = item['short_name'].replace('|', '_')
                # 保存文件
                with open(f'{output_dir}{file_name}.json', 'w', encoding='UTF-8') as f:
                    f.write(json.dumps(price_history, ensure_ascii=False, indent=4))
                print(f"Saved data for {item['short_name']}")
            else:
                print(f"No price history found for {item['short_name']}")

        except Exception as e:
            print(f"Error fetching data for {item['short_name']}: {e}")




