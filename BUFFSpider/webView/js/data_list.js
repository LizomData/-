
const dragArea = document.getElementById('dragArea');
let jsonData = [{"name": "AK-47 | \u6355\u98df\u8005 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 81, "sell_min_price": "133.4", "icon_url": "https://market.fp.ps.netease.com/file/65f59a8b37a9769fefc2fa202fxclP5f05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u58a8\u5ca9 (\u6218\u75d5\u7d2f\u7d2f)", "sell_num": 4397, "sell_min_price": "15.8", "icon_url": "https://market.fp.ps.netease.com/file/65f584dd7364dac260a53298mD9Ijt0105?fop=imageView/6/f/webp", "localized_name": "\u6218\u75d5\u7d2f\u7d2f"}, {"name": "AK-47 | \u53ef\u71c3\u51b0 (\u7565\u6709\u78e8\u635f)", "sell_num": 7012, "sell_min_price": "56.3", "icon_url": "https://market.fp.ps.netease.com/file/65f580e192eb79801d409bdaiAuTQG1705?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u7fe1\u7fe0\u7ec6\u6761\u7eb9 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 1677, "sell_min_price": "17.04", "icon_url": "https://market.fp.ps.netease.com/file/65f596c55ece72ec14ee49ecQi76UciX05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u5b89\u5168\u7f51 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 772, "sell_min_price": "15.85", "icon_url": "https://market.fp.ps.netease.com/file/65f593ac3a744bc285d2e2a9i5smM1Ss05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u7ea2\u7ebf (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 10195, "sell_min_price": "173.5", "icon_url": "https://market.fp.ps.netease.com/file/65f57cfd4a1277d13463b336NCAkQfVG05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u5361\u7279\u5c14 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 1547, "sell_min_price": "66.5", "icon_url": "https://market.fp.ps.netease.com/file/660a585172a0cb4c7deab345CDIDyx0q05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u963f\u52aa\u6bd4\u65af\u519b\u56e2 (\u7565\u6709\u78e8\u635f)", "sell_num": 2979, "sell_min_price": "51.2", "icon_url": "https://market.fp.ps.netease.com/file/65f57f7f52224544f0c051a1NFKXICgT05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u4f20\u627f (\u7565\u6709\u78e8\u635f)", "sell_num": 420, "sell_min_price": "768.5", "icon_url": "https://market.fp.ps.netease.com/file/65c36533e44dad793e26ee53zQFk4sdy05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u524d\u7ebf\u8ff7\u96fe (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 1813, "sell_min_price": "78.5", "icon_url": "https://market.fp.ps.netease.com/file/65f57920fb0ac838070117c0SNDbH2vb05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u4ea4\u53c9\u6e10\u53d8 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 337, "sell_min_price": "41", "icon_url": "https://market.fp.ps.netease.com/file/66fe0c98c591cd7972a8f175lxxCqcqy05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u591c\u613f (\u7565\u6709\u78e8\u635f)", "sell_num": 3310, "sell_min_price": "108", "icon_url": "https://market.fp.ps.netease.com/file/65f576567a48e5c33b9ab90faeQi5lGS05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u8f68\u9053 Mk01 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 366, "sell_min_price": "88", "icon_url": "https://market.fp.ps.netease.com/file/65f57eb9341cb121d1e840dfiyRyhPDs05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u58a8\u5ca9 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 2082, "sell_min_price": "63.9", "icon_url": "https://market.fp.ps.netease.com/file/65f5848fd4a4380749e3c205rAiOjVR305?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u9713\u8679\u9769\u547d (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 1643, "sell_min_price": "97.9", "icon_url": "https://market.fp.ps.netease.com/file/65f58796d02b84fe32b95eeai482DzIL05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u5c40\u5916\u4eba (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 259, "sell_min_price": "128", "icon_url": "https://market.fp.ps.netease.com/file/66fde31f064d32cb4f26bb84QE0vq4pD05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u5361\u7279\u5c14 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 607, "sell_min_price": "169.5", "icon_url": "https://market.fp.ps.netease.com/file/660a58f362ad352e7ad77572uuphQ11805?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u5c40\u5916\u4eba (\u7565\u6709\u78e8\u635f)", "sell_num": 151, "sell_min_price": "255", "icon_url": "https://market.fp.ps.netease.com/file/66fdf7bf0a3d243f6bd28c98AbiaBRNN05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u8840\u8165\u8fd0\u52a8 (\u7565\u6709\u78e8\u635f)", "sell_num": 836, "sell_min_price": "882", "icon_url": "https://market.fp.ps.netease.com/file/65f5778c56e9521d027a4bfdxXRDCps205?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u72e9\u730e\u7f51\u683c (\u7565\u6709\u78e8\u635f)", "sell_num": 5648, "sell_min_price": "1.04", "icon_url": "https://market.fp.ps.netease.com/file/65f58c6056a9ea245eb416aeI2qbuSoV05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u58a8\u5ca9 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 13906, "sell_min_price": "19", "icon_url": "https://market.fp.ps.netease.com/file/65f5848fd4a4380749e3c205rAiOjVR305?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u53ef\u71c3\u51b0 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 3082, "sell_min_price": "99.4", "icon_url": "https://market.fp.ps.netease.com/file/65f580e192eb79801d409bdaiAuTQG1705?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u5e7b\u5f71\u7834\u574f\u8005 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 827, "sell_min_price": "64.68", "icon_url": "https://market.fp.ps.netease.com/file/65f57a821dbe9af3dbfbf429rgv0ls0i05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u4f20\u627f (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 455, "sell_min_price": "625", "icon_url": "https://market.fp.ps.netease.com/file/65c34dda2b807e3150cb64beF011skbE05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u4e00\u53d1\u5165\u9b42 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 3090, "sell_min_price": "50.9", "icon_url": "https://market.fp.ps.netease.com/file/65f57963acf98ab8de143dbatYreY5iP05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u7cbe\u82f1\u4e4b\u4f5c (\u7565\u6709\u78e8\u635f)", "sell_num": 5516, "sell_min_price": "13.68", "icon_url": "https://market.fp.ps.netease.com/file/65f57b4a5af16f7910aba386r7GCHfGj05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u7687\u540e (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 2059, "sell_min_price": "219.4", "icon_url": "https://market.fp.ps.netease.com/file/65f5779ddd7f5e6f46af1b7cvEUhd9Cd05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u9713\u8679\u9a91\u58eb (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 807, "sell_min_price": "304.6", "icon_url": "https://market.fp.ps.netease.com/file/65f57806f01b9ff8cbbd5bd56E3QqB0s05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u53ef\u71c3\u51b0 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 12118, "sell_min_price": "32.29", "icon_url": "https://market.fp.ps.netease.com/file/65f58351313545d4f0b3bc66Nh9lFIsG05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u5e7b\u5f71\u7834\u574f\u8005 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 4165, "sell_min_price": "22.69", "icon_url": "https://market.fp.ps.netease.com/file/65f58700da17dd5bf2f320caimw825Th05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u6df7\u6c8c\u70b9\u9635 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 2048, "sell_min_price": "57.2", "icon_url": "https://market.fp.ps.netease.com/file/65f574a915e4f8eb8d87ad6bOW4g3bwY05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u58a8\u5ca9 (\u7565\u6709\u78e8\u635f)", "sell_num": 11022, "sell_min_price": "31.88", "icon_url": "https://market.fp.ps.netease.com/file/65f58214edb3f8a06ca8b9f5f64PLNuk05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u7cbe\u82f1\u4e4b\u4f5c (\u7834\u635f\u4e0d\u582a)", "sell_num": 1423, "sell_min_price": "6", "icon_url": "https://market.fp.ps.netease.com/file/65f5844574b9f1bce766c9490Q1GOl3605?fop=imageView/6/f/webp", "localized_name": "\u7834\u635f\u4e0d\u582a"}, {"name": "AK-47 | \u4e1b\u6797\u6d82\u88c5 (\u6218\u75d5\u7d2f\u7d2f)", "sell_num": 72, "sell_min_price": "26.38", "icon_url": "https://market.fp.ps.netease.com/file/65f59331feab662dd227f53eOgZMSSNO05?fop=imageView/6/f/webp", "localized_name": "\u6218\u75d5\u7d2f\u7d2f"}, {"name": "AK-47 | \u6a44\u6984\u8ff7\u5f69 (\u7565\u6709\u78e8\u635f)", "sell_num": 809, "sell_min_price": "1.66", "icon_url": "https://market.fp.ps.netease.com/file/66fdece98ff46e7e1a08146evULaBlmM05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u591c\u613f (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 4975, "sell_min_price": "52", "icon_url": "https://market.fp.ps.netease.com/file/65f58122e5e1676bd5aaa8269tos0AZz05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u6a44\u6984\u8ff7\u5f69 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 1562, "sell_min_price": "3.8", "icon_url": "https://market.fp.ps.netease.com/file/66fdece98ff46e7e1a08146evULaBlmM05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u963f\u52aa\u6bd4\u65af\u519b\u56e2 (\u7565\u6709\u78e8\u635f)", "sell_num": 277, "sell_min_price": "149.99", "icon_url": "https://market.fp.ps.netease.com/file/65f57f7f52224544f0c051a1NFKXICgT05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u5c40\u5916\u4eba (\u6218\u75d5\u7d2f\u7d2f)", "sell_num": 83, "sell_min_price": "71.9", "icon_url": "https://market.fp.ps.netease.com/file/66fe06ba78048f25700acbcctpCvv4kh05?fop=imageView/6/f/webp", "localized_name": "\u6218\u75d5\u7d2f\u7d2f"}, {"name": "AK-47 | \u524d\u7ebf\u8ff7\u96fe (\u7565\u6709\u78e8\u635f)", "sell_num": 937, "sell_min_price": "175.5", "icon_url": "https://market.fp.ps.netease.com/file/65f5772da0c9e838d0af3835131e97BM05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u5b89\u5168\u7f51 (\u7565\u6709\u78e8\u635f)", "sell_num": 616, "sell_min_price": "23.96", "icon_url": "https://market.fp.ps.netease.com/file/65f594a2b7c6572ed7399e6aPPjgvYac05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u94a2\u94c1\u4e09\u89d2\u6d32 (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 896, "sell_min_price": "6.98", "icon_url": "https://market.fp.ps.netease.com/file/65f5903cdf49f7635e026ae5SU0OYibL05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u7cbe\u82f1\u4e4b\u4f5c (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 4551, "sell_min_price": "8.87", "icon_url": "https://market.fp.ps.netease.com/file/65f5844574b9f1bce766c9490Q1GOl3605?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u71c3\u6599\u55b7\u5c04\u5668 (\u7834\u635f\u4e0d\u582a)", "sell_num": 141, "sell_min_price": "900", "icon_url": "https://market.fp.ps.netease.com/file/65f5720e885e79cf10ca301bsK4gSTei05?fop=imageView/6/f/webp", "localized_name": "\u7834\u635f\u4e0d\u582a"}, {"name": "AK-47 | \u4e00\u53d1\u5165\u9b42 (\u7565\u6709\u78e8\u635f)", "sell_num": 1491, "sell_min_price": "119.5", "icon_url": "https://market.fp.ps.netease.com/file/65f578c0db8a6890c4d6e437QX3zjCAS05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u4e8c\u897f\u83ab\u592b (\u7565\u6709\u78e8\u635f)", "sell_num": 1910, "sell_min_price": "423", "icon_url": "https://market.fp.ps.netease.com/file/65f57072372367dc73b699e2Zc91itAt05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u8ff7\u8e2a\u79d8\u5883 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 211, "sell_min_price": "30.7", "icon_url": "https://market.fp.ps.netease.com/file/65f586dc5aa9dbbcbdbd7556bYJWNOb705?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u5e7b\u5f71\u7834\u574f\u8005 (\u7565\u6709\u78e8\u635f)", "sell_num": 207, "sell_min_price": "91.68", "icon_url": "https://market.fp.ps.netease.com/file/65f57a821dbe9af3dbfbf429rgv0ls0i05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u524d\u7ebf\u8ff7\u96fe (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 192, "sell_min_price": "189", "icon_url": "https://market.fp.ps.netease.com/file/65f57920fb0ac838070117c0SNDbH2vb05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u4f20\u627f (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 95, "sell_min_price": "829.5", "icon_url": "https://market.fp.ps.netease.com/file/65c34dda2b807e3150cb64beF011skbE05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u8f68\u9053 Mk01 (\u7565\u6709\u78e8\u635f)", "sell_num": 73, "sell_min_price": "342.71", "icon_url": "https://market.fp.ps.netease.com/file/65f57e8ca7223f7e3ddc7beaGmxPEJeX05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u6df7\u6c8c\u70b9\u9635 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 531, "sell_min_price": "240.9", "icon_url": "https://market.fp.ps.netease.com/file/65f5776c55620302226d48a0jN52YVdm05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u5b89\u5168\u7f51 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 977, "sell_min_price": "36", "icon_url": "https://market.fp.ps.netease.com/file/65f594a2b7c6572ed7399e6aPPjgvYac05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u94a2\u94c1\u4e09\u89d2\u6d32 (\u7565\u6709\u78e8\u635f)", "sell_num": 645, "sell_min_price": "10.2", "icon_url": "https://market.fp.ps.netease.com/file/65f58b1d15bf87e8b346a27dY2l3zgNP05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u590d\u53e4\u6d6a\u6f6e (\u4e45\u7ecf\u6c99\u573a)", "sell_num": 770, "sell_min_price": "19.37", "icon_url": "https://market.fp.ps.netease.com/file/65f57bbfb80911855aaa0ec3k4w26QAX05?fop=imageView/6/f/webp", "localized_name": "\u4e45\u7ecf\u6c99\u573a"}, {"name": "AK-47 | \u591c\u613f (\u7834\u635f\u4e0d\u582a)", "sell_num": 649, "sell_min_price": "39.68", "icon_url": "https://market.fp.ps.netease.com/file/65f58122e5e1676bd5aaa8269tos0AZz05?fop=imageView/6/f/webp", "localized_name": "\u7834\u635f\u4e0d\u582a"}, {"name": "AK-47 | \u58a8\u5ca9 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 4002, "sell_min_price": "67.02", "icon_url": "https://market.fp.ps.netease.com/file/65f58214edb3f8a06ca8b9f5f64PLNuk05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47 | \u9ec4\u91d1\u85e4\u8513 (\u5d2d\u65b0\u51fa\u5382)", "sell_num": 336, "sell_min_price": "19400", "icon_url": "https://market.fp.ps.netease.com/file/65f5a26649e0a0534f3f90e6c2iGaURe05?fop=imageView/6/f/webp", "localized_name": "\u5d2d\u65b0\u51fa\u5382"}, {"name": "AK-47\uff08StatTrak\u2122\uff09 | \u706b\u86c7 (\u7565\u6709\u78e8\u635f)", "sell_num": 105, "sell_min_price": "17800", "icon_url": "https://market.fp.ps.netease.com/file/65f5944aecf6b37d5642f1d6kj8SN7lK05?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}, {"name": "AK-47 | \u8ff7\u8e2a\u79d8\u5883 (\u7565\u6709\u78e8\u635f)", "sell_num": 1854, "sell_min_price": "3.16", "icon_url": "https://market.fp.ps.netease.com/file/65f586dc5aa9dbbcbdbd7556bYJWNOb705?fop=imageView/6/f/webp", "localized_name": "\u7565\u6709\u78e8\u635f"}]; // 用来存储解析后的 JSON 数据
let currentPage = 0; // 当前页数
let n = 0;
let parts;
let names;
const itemsPerPage = 16; // 每页显示的条目数

// 阻止默认行为，防止文件被打开
dragArea.addEventListener('dragover', function (event) {
  event.preventDefault();
  dragArea.style.backgroundColor = '#f0f0f0';
});

dragArea.addEventListener('dragleave', function (event) {
  event.preventDefault();
  dragArea.style.backgroundColor = '';

});

// 当拖拽离开页面时隐藏拖拽区域
document.body.addEventListener('dragleave', function (event) {
  event.preventDefault();
  dragArea.classList.remove('active'); // 隐藏拖拽区域
});

// 当文件被拖放到页面时
dragArea.addEventListener('drop', function (event) {
  event.preventDefault();
  dragArea.classList.remove('active'); // 隐藏拖拽区域

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const liElements = document.querySelectorAll('.item');
    console.log(liElements)
    liElements.forEach(li => {
      li.remove();
    });
    addFilesToList(files);
  }
});

dragArea.classList.remove('active'); // 隐藏拖拽区域

const liElements = document.querySelectorAll('.item');
liElements.forEach(li => {
  li.remove();
});

// 初始化分页
currentPage = 0; // 重新加载时从第一页开始
renderPage();

// 更新按钮状态
updateButtons();

function addFilesToList(files) {
  const file = files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      // 解析 JSON 内容
      jsonData = JSON.parse(e.target.result);

      // 初始化分页
      currentPage = 0; // 重新加载时从第一页开始
      renderPage();

      // 更新按钮状态
      updateButtons();
    } catch (err) {
      console.error('无法解析JSON文件:', err);
    }
  };

  // 读取文件为文本
  reader.readAsText(file);
}

// 渲染当前页的数据
function renderPage() {
  const list = document.getElementsByClassName('item');
  console.log(list);

  //list.innerHTML = ''; // 清空现有的列表项

  // 计算当前页应该显示的数据
  const start = currentPage * itemsPerPage;
  const end = Math.min(start + itemsPerPage, jsonData.length);
  const pageData = jsonData.slice(start, end);

  // 遍历当前页数据并生成 li
  pageData.forEach(item => {

    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const h3Link = document.createElement('a');
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    const sellNum = item.sell_num > 1000 ? '1000+' : item.sell_num;
    console.log(sellNum);





    strong.textContent = "¥ " + item.sell_min_price;
    p.appendChild(strong);

    span1.textContent = sellNum + "件在售";
    console.log(span1);
    p.appendChild(span1);

    li.className = 'item';
    img.src = item.icon_url;
    //img.alt = item; // 设置图片的 alt 属性

    h3Link.textContent = item.name; // 设置 h3 内的链接文本

    str = h3Link.textContent;

    parts = str.split(" | ");
    names = parts[1].split(" ")[0];

    h3Link.href = `./test/index.html?n=${img.src}&namess=${names}`; // 设置 h3 内的链接

    // 设置 a 的链接和内容
    a.href = `./test/index.html?n=${img.src}&namess=${names}`; // 设置图片链接
    a.appendChild(img); // 将 img img添加到 a 中



    // 设置 h3 的文本内容和链接




    console.log(names);

    h3.appendChild(h3Link); // 将链接添加到 h3 中

    span.textContent = item.localized_name;
    span.className = "color";



    // 将元素添加到结构中
    li.appendChild(a);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    container.appendChild(li);
    //container.backgroundColor = "rgba(238, 235, 232, 0.5)";


    let colors = document.querySelectorAll(".color");
    colors.forEach(element => {
      // 获取元素的文本内容
      let textContent = element.textContent.trim();
      // 根据文本内容设置不同的颜色
      if (textContent === "破损不堪") {
        element.style.backgroundColor = "#B7625F"; // 重要设置为红色
      } else if (textContent === "久经沙场") {
        element.style.backgroundColor = "#F1AD4D"; // 警告设置为橙色
      } else if (textContent === "略有磨损") {
        element.style.backgroundColor = "#488B48"; // 其他设置为绿色
      } else if (textContent === "崭新出厂") {
        element.style.backgroundColor = "#397439"
      } else if (textContent === "战痕累累") {
        element.style.backgroundColor = "#993A38"
      }
    });
  });
}
// 文件上传时的事件监听
document.getElementById('dragArea').addEventListener('change', function (event) {

})

// 更新分页按钮的状态
function updateButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // 上一页按钮的状态
  prevBtn.disabled = currentPage === 0;

  // 下一页按钮的状态
  nextBtn.disabled = currentPage >= Math.ceil(jsonData.length / itemsPerPage) - 1;
}

// 获取所有的 <li> 元素





// 点击上一页按钮
//const list = document.getElementsByClassName('item');
document.getElementById('prevBtn').addEventListener('click', function () {
  if (currentPage > 0) {
    const liElements = document.querySelectorAll('.item');
    console.log(liElements)
    liElements.forEach(li => {
      li.remove();
    });
    currentPage--;
    renderPage();
    updateButtons();
  }
});

// 点击下一页按钮
document.getElementById('nextBtn').addEventListener('click', function () {
  if (currentPage < Math.ceil(jsonData.length / itemsPerPage) - 1) {
    const liElements = document.querySelectorAll('.item');
    console.log(liElements)
    liElements.forEach(li => {
      li.remove();
    });
    currentPage++;
    renderPage();
    updateButtons();
  }
});
