# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class BUFFItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    sell_min_price = scrapy.Field()
    sell_num = scrapy.Field()
    icon_url = scrapy.Field()
    localized_name= scrapy.Field()
    short_name=scrapy.Field()

