import os
import pymysql
import toml

create_table_data = {
    "languages": "`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL, `locale` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL, `isdefault` tinyint(1) NOT NULL, CONSTRAINT `languages_pk` PRIMARY KEY (`id`)",
    "loc_types": "`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, CONSTRAINT `loc_types_pk` PRIMARY KEY (`id`)",
    "loc_type_descriptions": "`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, `loc_type_id` int(11) UNSIGNED NOT NULL, `lang_id` int(11) UNSIGNED NOT NULL, `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL, CONSTRAINT `loc_type_descs_pk` PRIMARY KEY (`id`)",
    "locations": "`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, `loc_type_id` int(11) UNSIGNED NOT NULL, `latitude` decimal(11,7) NOT NULL, `longitude` decimal(11,7) NOT NULL, `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL, CONSTRAINT `locations_pk` PRIMARY KEY (`id`)",
    "location_descriptions": "`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, `location_id` int(11) UNSIGNED NOT NULL, `lang_id` int(11) UNSIGNED NOT NULL, `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL, `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL, `content` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL, CONSTRAINT `location_descs_pk` PRIMARY KEY (`id`)"
}

insert_data = {
    "languages": [
        "1, 'English', 'en', 1",
        "2, '日本語', 'ja', 0"],

    "loc_types": [
        "1",
        "2"],

    "loc_type_descriptions": [
        "1, 1, 1, 'Building'",
        "2, 1, 2, '建物'",
        "3, 2, 1, 'Spot'",
        "4, 2, 2, 'スポット'"],

    "locations": [
        "1, 2, -37.8264003, 144.971688, '/locations/botanic_garden.jpg'",
        "2, 1, -37.8098044, 144.9649957, '/locations/state_library.jpg'",
        "3, 1, -37.8203346, 144.9668786, '/locations/southgate.jpg'",
        "4, 1, -37.8227199, 144.9692338, '/locations/ngv.jpg'",
        "5, 1, -37.8150763, 144.9667116, '/locations/townhall.jpg'",
        "6, 2, -37.8114839, 144.9687451, '/locations/chinatown.jpg'",
        "7, 1, -37.8110469, 144.973821, '/locations/parliament.jpg'",
        "8, 2, -37.8075798, 144.956785, '/locations/queen_victoria_market.jpg'",
        "9, 1, -37.8182711, 144.9670618, '/locations/frinders_station.jpg'",
        "10, 2, -37.8156834, 144.9687543, '/locations/acdc_lane.jpg'",
        "11, 2, -37.8043478, 144.9713826, '/locations/carton_garden.jpg'",
        "12, 2, -37.8102318, 144.9629957, '/locations/melbourne_central.jpg'"],

    "location_descriptions": [
        "1, 1, 1, 'Royal Botanic Gardens', '100 Birdwood Ave, Melbourne VIC 3004', ''",
        "2, 1, 2, 'ロイヤル植物園', '100 Birdwood Ave, Melbourne VIC 3004', ''",
        "3, 2, 1, 'State Library Victoria', '328 Swanston St, Melbourne VIC 3000', ''",
        "4, 2, 2, 'ビクトリア州立図書館', '328 Swanston St, Melbourne VIC 3000', ''",
        "5, 3, 1, 'Southgate Melbourne Restaurant & Shopping Centre', '3 Southgate Ave, Southbank VIC 3006', ''",
        "6, 3, 2, 'サウスゲート・ショッピングセンター', '3 Southgate Ave, Southbank VIC 3006', ''",
        "7, 4, 1, 'National Gallery of Victoria', '180 St Kilda Rd, Melbourne VIC 3006', ''",
        "8, 4, 2, 'ビクトリア国立美術館', '180 St Kilda Rd, Melbourne VIC 3006', ''",
        "9, 5, 1, 'Melbourne Townhall', '90-130 Swanston St, Melbourne VIC 3000', ''",
        "10, 5, 2, 'メルボルン市役所', '90-130 Swanston St, Melbourne VIC 3000', ''",
        "11, 6, 1, 'Melbourne Chinatown', 'Little Bourke St, Melbourne VIC 3000', ''",
        "12, 6, 2, 'メルボルン中華街', 'Little Bourke St, Melbourne VIC 3000', ''",
        "13, 7, 1, 'Parliament of Victoria', 'Spring St, East Melbourne VIC 3002', ''",
        "14, 7, 2, 'ビクトリア州議事堂', 'Spring St, East Melbourne VIC 3002', ''",
        "15, 8, 1, 'Queen Victoria Market', 'Queen St, Melbourne VIC 3000', ''",
        "16, 8, 2, 'クィーンヴィクトリア・マーケット', 'Queen St, Melbourne VIC 3000', ''",
        "17, 9, 1, 'Flinders Street Station', '207–361 Flinders St, Melbourne VIC 3000', ''",
        "18, 9, 2, 'フリンダースストリート駅', '207–361 Flinders St, Melbourne VIC 3000', ''",
        "19, 10, 1, 'AC/DC Lane', 'AC/DC Lane, Melbourne VIC 3000', ''",
        "20, 10, 2, 'ACDC通り', 'AC/DC Lane, Melbourne VIC 3000', ''",
        "21, 11, 1, 'Carlton Gardens', '1-111 Carlton St, Carlton VIC 3053', ''",
        "22, 11, 2, 'カールトン庭園', '1-111 Carlton St, Carlton VIC 3053', ''",
        "23, 12, 1, 'Melbourne Central', 'Cnr La Trobe St & Swanston St, Melbourne VIC 3000', ''",
        "24, 12, 2, 'メルボルン・セントラル', 'Cnr La Trobe St & Swanston St, Melbourne VIC 3000', ''"]
}

if __name__ == '__main__':

    with open(os.path.join(os.path.dirname(__file__), 'database.toml')) as f:
        obj = toml.load(f)

    cursorClass = pymysql.cursors.DictCursor

    conn = pymysql.connect(host=obj['host'],
                           port=obj['port'],
                           user=obj['user'],
                           password=obj['password'],
                           db=obj['db'],
                           charset=obj['charset'],
                           cursorclass=cursorClass)

    try:

        cur = conn.cursor()

        for key, val in create_table_data.items():
            cur.execute(f"CREATE TABLE {key} ({val}) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;")

        for key, vals in insert_data.items():
            for val in vals:
                cur.execute(f"INSERT INTO {key} VALUES ({val});")

        cur.execute("commit;")

        print("Data Setup Completed !")

    except Exception as e:
        print("Exeception occured:{}".format(e))

    finally:
        conn.close()
