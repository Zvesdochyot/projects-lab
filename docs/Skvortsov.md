# ProjectsLab. Запити зацікавлених осіб

## Вступ

У цьому документі описуються запити зацікавленої особи, в якості якої виступає доцент Болдак А. О., по відношенню до розробляємої в рамках лаборатних робіт - системи управління проектами.

### Мета 

Метою документа є визначення основних вимог до функціональності, продуктивності і експлуатаційної придатності, а також визначення бізнес-правил і технологічних обмежень, що пред'являються до предмету розробки.

### Контекст

Цей документ пов'язаний з системою управління проектами, описує її особливості, функціонал та інші властивості та відповідає запитам зацікавлених осіб і аналізу предметної області.


### Основні визначення та скорочення

* СУП - Система Управіння Проектами

### Посилання

- [Джерело 1 (oridu.odessa)](http://www.oridu.odessa.ua/7/7/metoduchni-rek/t/02.pdf)
- [Джерело 2 (ela.kpi)](https://ela.kpi.ua/bitstream/123456789/19481/1/DMM_UP_2017.pdf)
- [Джерело 3 (gihub.com)](https://github.com/ip-85/robin/blob/master/docs/stakeholders.md#4)
- [Джерело 4 (rayradavn.gov.ua)](http://rayradavn.gov.ua/images/metodychna/zayavka.pdf)

## Короткий зміст

В подальшій частині документа описуються ділові процеси, вимоги замовника, виключні та основні сценарії розробки продукту.

## Характеристика ділових процесів

***ID:*** ***IV-92 (1)***<br>

***НАЗВА:***  Cтворення проекту.<br>

***УЧАСНИКИ:***  Team Lead, керуючий<br>

***ПЕРЕДУМОВИ:***  Вимоги замовника<br>

***РЕЗУЛЬТАТ:***  Проект, готовий до реалізації<br>

***ВИКЛЮЧНІ СИТУАЦІЇ:***<br>

- EX.002.001 Недостатньо/Некоректні вимоги замовника<br>
- EX.002.002 Недостатня кількість розробників<br>
- EX.002.003 Можливість реалізації<br>

***ОСНОВНИЙ СЦЕНАРІЙ:***

1. Team lead та керуючий реєструються на платформі.
2. Інтегрує проект з репозиторію github-а.
3. Задає назву, опис проекту.
4. Запрошує команду, призначає ролі, зони відповідальності.(Можлива EX.002.002)
5. Трансформує вимоги замовника в завдання, призначає на них людей.(Можливі EX.002.001 EX.002.002 EX.002.003)
6. Створює колонки для відстеження прогресу.(Можлива EX.002.003)
7. Налаштовує Instant Messaging.
8. Задає опис кінцевого продукту.

***ID:*** ***IV-92 (2)***<br>

***НАЗВА:***<br>
Управління проектами.<br>

***УЧАСНИКИ:***<br>
Team Lead, куруючий, команда<br>

***ПЕРЕДУМОВИ:***<br>
Потреба в зручному управлінні кількома активними проектами<br>

***РЕЗУЛЬТАТ:***<br>
Зручне та швидке редагування проекту<br>

***ВИКЛЮЧНІ СИТУАЦІЇ:***<br>
- EX.003.001 Недостача інформації від замовника
- EX.003.002 Проект не активний
- EX.003.003 Кардинальна зміна вимог замовника
- EX.003.004 Неможливість реалізаціїї
- EX.003.005 Недостатня кількість розробників
- EX.003.006 Зрив дедлайну
- EX.003.007 Непередбачувані обставини

***ОСНОВНИЙ СЦЕНАРІЙ:***<br>
Team Lead/керуючий можуть швидко редагувати проект, його мету, потреби, задачі, перенаправити розробників, деактивувати проект.
Під час редагування можливі виключні ситуції з кодами 003.*<br>

## Короткий огляд продукту

ProjectsLab - це сервіс, який допоможе Вам у розробці програмного забезпечення. Сервіс для слідкування та управління проектами, командами, задачами. Користувачі нашої системи зможуть оперувати задачами та проектами у зручному "user-friendly" інтерфейсі, також ми надаємо змогу усім користувачам нашого сервісу спілкуватися між собою у зручному інтерфейсі. Користувачі зможуть створювати команди та зберігати їх для майбутніх проектів.


## Функціональність

Кожен режим реалізований через відповідний йому інтерфейс. Такий підхід сприяє ієрахічній систематизації взаємодії між різними ролями (видами) учасників створення проекту та взаємодії з ними (тестуваннями). Кожна з представлених моделей відводить певний набір функцій для впорядкування робочого процесу, сприяє автоматизації поділу на ці самі ролі та відведенню певній особі відповідної ланки взаємодії в застосунку.

### Інтерфейс лідера

Функціональний простір облікового запису лідера має відповідати повному керуванню проектом.

Надаються можливості:
- Управління проектом
- Управління заваданнями
- Управління командою
- Управління артефактами, що допомагають розв'язати завдання
- Створення завдань для команди;
- Встановлення та зміна дедлайнів завдань;
- Встановлення та зміна приорітетності виконання завдань;
- Встановлення порядку виконання завдань;

### Інтерфейс розробника

Можливості облікового запису розробника забеспечують керування своїми заданнями.

Доступні функції:
- Встановлення дедлайнів своїх завдань;
- Зміна статусу завданнь (наприклад, вирішено);
- Розбиття завдання на декілька підзавдань;
- Уточнення вимог до завдання

# Аналіз юзкейсів.

***ID:*** UC10 <br>
***Назва:*** Редагування задачі <br>
***Учасники:*** Користувач, система<br>
***Передумови*** Користувач має права доступу до проекту<br>
***Результат:*** Відредагована задача<br>
***Виключні ситуації:*** <br>
- EX10.1 такої задачі не існує <br>
- EX10.2 дані введені некоректно <br>

![](http://www.plantuml.com/plantuml/png/hLJ5sHmn5Bjl5GuptiBSGuvXPZY5cPavgM0PXrhGwoYI_Vsp3875nv9bUxPVlBJ_mgNBfqyL2ewlg_YCr6wYPRVijjr11ILxS5Kf__B5kPSR6ns-iV2ssj2XzTRnBq6A31sxu-RZ9-geeOIgPePIXoO3DG7OdVcR-gTUnQ_0WNqnIbT7Odv7cLHJb17PSs5gOCQ-suxW9STa7og3YRte8fqvU-cmkt3ywB5BRi6H8_lvobER3snr-8eK3KHeiJdjI-tPksxjwdLvwF2PGtxOW22eKOuM8Y-8tVN2ndQ7F9sdbJ0PIuXCo-ZJeqUEATlIY_c1uzyZiUSJyH2xfRJhpakNehB4NX2x8rCqP3H2GKOpGdtPnXnbbQHLOSbhp3wQmzaMsiIK_5e-saZ6r6HYIVmQGnsdgCTFvdPhT5jl7UswtRUdqazEBM-TWTLG4uMVUWQ7ZrwlskAaiM4hxWmXJD7IsHqaREqm4DbJ9MQJBXkKplaz337oYpHKfyVVbDvsLSJEqtt85T_hEObZe0FRH1KK9_51hqSpgAAGE8bQHiH7UPL2Jjl5J9LcEFjCUsh_xMwk7tytPtdEQOSPPnvn42pJuYcHLXJhJinfxFaFxRSNpzvlwdbodZstgL3OJZfwsFu6)

***ID:*** UC_AR_2<br>
***Назва:*** Видалення артефакту<br>
***Учасники:*** Користувач, Система<br>
***Передумови:*** Існуючий артефакт<br>
***Результат:*** Видалений артефакт<br>
***Виключні ситуації:***<br>
- EX_AR_2.1 Недостатьно прав доступу<br>
***Основний сценарій***<br>

![UC_AR_2](http://www.plantuml.com/plantuml/png/ZLD36Xn16DttAVvliXtlObyWczZMU5QnRLi76BPrXLStocjtdDeK7XkbRHYE3Wv6uxDdD4qupkCj0dKPbhgYhgfhc6EgRfqdb8oOdEzM2JuGlngnuN3rNE1ZAbpx2132KTVsT8Gc5fQOmeLEm5UFXDpBrEdgEe-TA6br6lybYIRJm_HyEUeJ0ZhfiJ2EyX0ajke-RNNPqy5SlKp21QOWv6v9TgmYrSZouP7y7xKmNPqt-Clh-TiBARyBgU1fdcb5jCg_7pjNg4Uq-xbXqQ_J7HsLmSdZ9qQoujYnWnmvjERGEi5x132YNCmH_01jtR5_uxRzxNehFptQEHBx_TylqUsjrk9jadwiI-KWn_4OVbp_PVnURd5dmHQ4aIcF2DMJTalefDqdn3HTtOGU7_bCVObvlN3yWA_uXc_2OfzmKuXwTToiumjNJcnxHTsFLbYK7fLiApAgjPljffO-PjPMsy1DV0k-0m00)

# Проектування бази даних.

### База даних

![DB_SCHEME](https://github.com/dmitriy-uvin/operating_project_system/blob/master/src/images/main.png)


### Модель бізнес-об'єктів

![ER_1](http://www.plantuml.com/plantuml/png/VPJLijmm38QlI--WIQ_ApCpCxGDuOsNNNKF6TWfFVqXpelL8avi5VR-iNp8yBTNaEWL_vYG00CRgwd_uQSfM12v74r16BPO-kx6w52KirTIfQ4d6UXTH4ZFLJSfAl1ItZcX_fZCdYSwUu5A-T9uz2rjmQPASdC4bAz1iJkInFpMFBS8bt-2cdQyv_SQ-QZ4QiGB4b2KdpohSdIbzxjIZDbjNIjK55Iql1SAS8g5F7Y9qLo_2-UvmIw6xTX6kTKBF_Vqgc4L0p92Y68ppYjZrMprXDANyJTdISGCAyd7ZshmyNFA2K0KQiu1p4JfF39LcFs5O7UEqEfm8_4GJFgAnS7QuFjmPXWQ-n3_equWPLFpjcHv_-rsF7-o2dVhwoKIpngnhljIDGFJ9PYvVVWpK2jm75qirFNuXBVSZHP5LtvujyuCE5ddRoRAMEbgKq2VX-VHQvVJIdhDccZMKhEpvirpTO2XR12_N_oFgX4wq9F8T4GBlOlDeDTNec3QkMC1tGnV8rqJes88G24DoZis3-nIZdOBV1m00)

### ER -  модель

![ER_2](http://www.plantuml.com/plantuml/png/hPF7KiGm38RFj7Vmx8qErvoszzwkZ4ZCZDcqiHKwxquSecqsdUtxwvFqowMe42GcWN-monWFKU0Zw_7Wcalsh2N6PEHpXyrBuqgpDDRIgrRNy2ce1S4X12luv5tpk7AbY554eHa2pnTXcb8jJMlJLg-MDLWhFbDSVbQS1o3yRJ4Kxi86nw3KVIIzRHtk044krMqFGndTSXS_io5SSpZ9uqW9ZEJZTYHL-LKY_NzTgP94SGCk_d8hy34sy7MBHZjNLw5c26hXi6bfqg5KnQMJxHwr1ipDBokjLPjW6ZQTKzyCjSogZzwO-_2f5SXXXvN6qrQzL9cUs4_sqXKDLxWuOKS5TkgTPZyl2zb05i1FWSiCq8we2hcasEaf9TZywmpz__iqlVFxQfYXWsjXF69e8jlOnEIxGrHcafZ4R5RaePS4_Xi0)

### Data Access Object
![DAO](http://www.plantuml.com/plantuml/png/RP91Ji9068NtaymT_WiGuyO5WGP2Dwum9kxOj6LCqDecxMYYAm3T4Oa9aQr7g8G68XQkyC-DV0LaDgncmdlVlF_zj95gBz6F3w4KkgT39GLHxJQEDAMz5rK_lw0W3kEaxeTUSE_KVCVrj4VD851fIct_JWLQ2XLrwK07G9CufDR-35LIoX2VoMssfUW2zxrKaRk_0972cgdYb3wgKklwngtmaZFUyieCfOXYhIX-WWU6Ac4KdBKpto4ku5fmPgRKlBhiHBYlpOHCdpVypHipv1NnalY3fr80GiWn7aay-myX_WKo1_9E83F4WyJBN41-0toWx9ZynJalpGY9OmHb-x0vh_Y7Dy1AjC0mjeaP7OUmlK--P7TWIRi52vzaWPHLSjFV_J05FZO3C-b4P4PaNb6oZxgmca-o7I7p5ahE2wWvs0BE6UrMkOPzK09IDF2Vuwlv0m00)


