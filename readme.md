# Moroccan Prayer Times API

The Moroccan Prayer Times API is a JavaScript API deployed using Node.js. It provides accurate prayer times (salat times) for various cities in Morocco. The API retrieves its data from the Moroccan government's official website.

## Usage

To retrieve the prayer times for a specific city, follow the steps below:

1. **Get List of Cities**

   To obtain the list of available cities, send a GET request to the following endpoint:

   <pre>
   GET https://adhanmaroc.onrender.com/api/cities
   </pre>

   This will return a JSON array containing the cities along with their corresponding IDs.


| ID  | City Name              |
|-----|------------------------|
| 1   | الرباط                 |
| 2   | الخميسات               |
| 3   | تيفلت                  |
| 4   | الرماني                |
| 5   | واملاس                |
| 6   | بوزنيقة                |
| 7   | القنيطرة               |
| 8   | سيدي قاسم             |
| 9   | سيدي يحيى الغرب       |
| 10  | سيدي سليمان           |
| 11  | سوق أربعاء الغرب      |
| 12  | عرباوة                |
| 13  | مولاي بوسلهام         |
| 14  | طنجة                  |
| 15  | تطوان                 |
| 16  | العرائش               |
| 17  | أصيلة                 |
| 18  | شفشاون                |
| 19  | مرتيل                 |
| 20  | المضيق                |
| 21  | القصر الكبير          |
| 22  | القصر الصغير          |
| 23  | الحسيمة               |
| 24  | سبتة                  |
| 25  | الفنيدق               |
| 26  | الجبهة                |
| 27  | واد لاو               |
| 28  | باب برد               |
| 29  | وزان                  |
| 30  | بوسكور               |
| 31  | وجدة                  |
| 32  | بركان                |
| 33  | فكيك                 |
| 34  | بوعرفة               |
| 35  | كرسيف                |
| 36  | جرادة                |
| 37  | عين الشعير           |
| 38  | تاوريرت              |
| 39  | الناظور              |
| 40  | مليلية               |
| 41  | دبدو                 |
| 42  | سلوان                |
| 43  | بني أنصار            |
| 44  | فرخانة               |
| 45  | تالسنت               |
| 46  | تندرارة              |
| 47  | العيون الشرقية       |
| 48  | بني ادرار            |
| 49  | السعيدية             |
| 50  | رأس الماء            |
| 51  | تافوغالت             |
| 52  | فزوان                |
| 53  | أحفير                |
| 54  | زايو                 |
| 55  | دريوش                |
| 56  | بني تجيت            |
| 57  | بوعنان               |
| 58  | الدار البيضاء         |
| 59  | المحمدية             |
| 60  | بن سليمان            |
| 61  | سطات                 |
| 62  | الكارة               |
| 63  | البروج               |
| 64  | ابن أحمد             |
| 65  | برشيد               |
| 66  | الجديدة              |
| 67  | أزمور               |
| 68  | سيدي بنور           |
| 69  | خميس الزمامرة       |
| 70  | خنيفرة              |
| 71  | مولاي بوعزة         |
| 72  | زاوية أحنصال        |
| 73  | بني ملال            |
| 74  | أزيلال              |
| 75  | الفقيه بنصالح       |
| 76  | دمنات               |
| 77  | القصيبة             |
| 78  | قصبة تادلة          |
| 79  | خريبكة              |
| 80  | وادي زم             |
| 81  | فاس                 |
| 82  | صفرو                |
| 83  | مولاي يعقوب         |
| 84  | بولمان              |
| 85  | ميسور               |
| 86  | رباط الخير          |
| 87  | المنزل بني يازغة    |
| 88  | إموزار كندر         |
| 89  | تازة                |
| 90  | تاونات             |
| 91  | أكنول               |
| 92  | تيزي وسلي           |
| 93  | بورد                |
| 94  | تاهلة               |
| 95  | تيسة                |
| 96  | قرية با محمد        |
| 97  | كتامة               |
| 98  | واد أمليل           |
| 99  | مكناس               |
| 100 | يفرن                |
| 101 | الحاجب              |
| 102 | زرهون               |
| 103 | آزرو               |
| 104 | مراكش              |
| 105 | قلعة السراغنة       |
| 106 | الصويرة             |
| 107 | شيشاوة              |
| 108 | بنجرير             |
| 109 | الرحامنة            |
| 110 | تمنار               |
| 111 | آسفي               |
| 112 | الوليدية            |
| 113 | اليوسفية            |
| 114 | تسلطانت            |
| 115 | تامصلوحت           |
| 116 | قطارة              |
| 117 | أكادير              |
| 118 | تارودانت            |
| 119 | تزنيت              |
| 120 | إغرم                |
| 121 | تالوين              |
| 122 | تافراوت            |
| 123 | طاطا               |
| 124 | أقا                 |
| 125 | فم لحصن           |
| 126 | بويكرة            |
| 127 | أولاد تايمة       |
| 128 | الرشيدية            |
| 129 | الريصاني           |
| 130 | أرفود              |
| 131 | تنديت             |
| 132 | كلميمة           |
| 133 | إملشيل            |
| 134 | تنجداد            |
| 135 | الريش             |
| 136 | ميدلت             |
| 137 | زاكورة            |
| 138 | ورزازات           |
| 139 | تنغير             |
| 140 | هسكورة            |
| 141 | قلعة مكونة         |
| 142 | أكدز              |
| 143 | بومالن دادس        |
| 144 | النيف             |
| 145 | أسول              |
| 146 | أمسمرير           |
| 147 | تازارين           |
| 148 | سيدي إفني         |
| 149 | كلميم             |
| 150 | أسا                |
| 151 | الزاك              |
| 152 | طانطان            |
| 153 | بويزكارن          |
| 154 | المحبس            |
| 155 | لمسيد             |
| 156 | العيون            |
| 157 | السمارة           |
| 158 | بوجدور           |
| 159 | طرفاية            |
| 160 | تفاريتي           |
| 161 | بوكراع            |
| 162 | كلتة زمور         |
| 163 | أمكالة            |
| 164 | أخفنير           |
| 165 | الداخلة           |
| 166 | الكويرة           |
| 167 | أوسرد            |
| 168 | بئر كندوز        |
| 169 | بئر أنزاران      |
| 170 | خميس سيدي عبد الجليل |
| 171 | أولاد عياد       |
| 172 | تاهلة             |
| 173 | مطماطة           |
| 174 | إيمنتانوت        |
| 175 | سيدي غانم         |
| 176 | تفنتان            |
| 177 | آيت القاق         |
| 178 | أكدال أملشيل     |
| 179 | اكودال املشيل ميدلت |
| 180 | أكايوار           |
| 181 | عين العودة        |
| 182 | أسكين             |
| 183 | آيت ورير          |
| 184 | زاوية مولاي ابراهيم |
| 185 | تولكولت          |
| 186 | إيكس              |
| 187 | كرس               |
| 188 | تيسنت             |
| 189 | فم زكيد          |
| 190 | قصر إيش          |
| 191 | إيمين ثلاث        |

2. **Get Prayer Times for a City**

   To retrieve the prayer times for a specific city, replace `{id}` in the following URL with the index of the city obtained from the previous step:

   <pre>
   GET https://adhanmaroc.onrender.com/api/city/{id}
   </pre>

   For example, if you want to fetch the prayer times for the Rabat with ID 1, the URL will be:

   <pre>
   GET https://adhanmaroc.onrender.com/api/city/1
   </pre>

   This will return a JSON object containing the prayer times for the specified city which is **Rabat**.

   The prayer times include:

   - Fajr: Dawn prayer time
   - Sunrise: Time of sunrise
   - Dhuhr: Midday prayer time
   - Asr: Afternoon prayer time
   - Maghrib: Sunset prayer time
   - Isha: Night prayer time

## Example Response

Here's an example response for the prayer times of a city:

```json
{
  "city": "Rabat",
  "date": "2023-06-19",
  "times": {
    "Fajr": "04:41 AM",
    "Sunrise": "06:37 AM",
    "Dhuhr": "01:06 PM",
    "Asr": "05:15 PM",
    "Maghrib": "08:32 PM",
    "Isha": "10:13 PM"
  }
}
```

## Deployment
The Moroccan Prayer Times API is currently deployed and accessible at https://adhanmaroc.onrender.com/. You can make requests to the available endpoints as described above.
