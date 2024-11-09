# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import openpyxl

class BuffspiderPipeline:
    def __init__(self):
        self.wb=openpyxl.Workbook()
        self.ws=self.wb.active
        self.ws.title='ak47商品'
        self.ws.append(('名称','在售数量','最低售价',"品质",'图片url'))
    def close_spider(self,spider):
        self.wb.save("ak47数据.xlsx")

    def process_item(self, item, spider):
        self.ws.append((
            item.get("short_name",""),
            item.get("sell_num",""),
            item.get("sell_min_price",""),
            item.get("localized_name", ""),
            item.get("icon_url",""),
        ))

        return item