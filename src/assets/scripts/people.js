const people = [
  {
    "_id": "5630ecd066d7e7e5a488e73e",
    "age": 39,
    "group": 2,
    "name": {
      "first": "Алёна",
      "last": "Смирнова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd016caac7d7baec245",
    "age": 35,
    "group": 4,
    "name": {
      "first": "Александр",
      "last": "Иванов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0cbaa04d0f14cafe2",
    "age": 22,
    "group": 2,
    "name": {
      "first": "Александра",
      "last": "Кузнецова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0ffbadb0bb9ac1815",
    "age": 31,
    "group": 3,
    "name": {
      "first": "Алексей",
      "last": "Соколов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0602453920b569e3a",
    "age": 25,
    "group": 5,
    "name": {
      "first": "Алина",
      "last": "Попова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd04bbf8fc4093273c4",
    "age": 33,
    "group": 5,
    "name": {
      "first": "Алла",
      "last": "Лебедева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0a2456231c6da2884",
    "age": 43,
    "group": 3,
    "name": {
      "first": "Анастасия",
      "last": "Козлова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd001255571e5fd1521",
    "age": 42,
    "group": 2,
    "name": {
      "first": "Анатолий",
      "last": "Новиков"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd071edc0141d4bc868",
    "age": 36,
    "group": 4,
    "name": {
      "first": "Андрей",
      "last": "Морозов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0f8d582ad3b03a00d",
    "age": 44,
    "group": 3,
    "name": {
      "first": "Анна",
      "last": "Петрова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd02cf0b88492aa854d",
    "age": 28,
    "group": 5,
    "name": {
      "first": "Антон",
      "last": "Волков"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd03e57b710693a5ab7",
    "age": 32,
    "group": 2,
    "name": {
      "first": "Анфиса",
      "last": "Соловьёва"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd074d941003a473e3d",
    "age": 43,
    "group": 4,
    "name": {
      "first": "Арина",
      "last": "Васильева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0773fd2f5e7dd37c5",
    "age": 21,
    "group": 3,
    "name": {
      "first": "Артём",
      "last": "Зайцев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd060fbb5492f5b6fe1",
    "age": 30,
    "group": 2,
    "name": {
      "first": "Богдан",
      "last": "Павлов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0707973680ff881c2",
    "age": 26,
    "group": 2,
    "name": {
      "first": "Борис",
      "last": "Семёнов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd00b97fb1b1d4d24d0",
    "age": 43,
    "group": 3,
    "name": {
      "first": "Вадим",
      "last": "Голубев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0f67eb5446bf6bcff",
    "age": 38,
    "group": 4,
    "name": {
      "first": "Валентин",
      "last": "Виноградов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0714b75547fc4d102",
    "age": 21,
    "group": 5,
    "name": {
      "first": "Валентина",
      "last": "Богданова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0d7982efc69f2208f",
    "age": 23,
    "group": 4,
    "name": {
      "first": "Валерий",
      "last": "Воробьёв"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0d3156027c772f871",
    "age": 32,
    "group": 3,
    "name": {
      "first": "Валерия",
      "last": "Фёдорова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd00ef40d744eff3c65",
    "age": 40,
    "group": 5,
    "name": {
      "first": "Василий",
      "last": "Михайлов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0b9f94f7d26e3d2a3",
    "age": 20,
    "group": 3,
    "name": {
      "first": "Вера",
      "last": "Беляева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd03a05141c19c3d7a3",
    "age": 44,
    "group": 4,
    "name": {
      "first": "Виктор",
      "last": "Тарасов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd02cba87b51e8990d5",
    "age": 43,
    "group": 1,
    "name": {
      "first": "Виктория",
      "last": "Белова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd00dace55bf1085d7c",
    "age": 30,
    "group": 1,
    "name": {
      "first": "Виталий",
      "last": "Комаров"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0967a00bf523ecdc8",
    "age": 28,
    "group": 2,
    "name": {
      "first": "Владимир",
      "last": "Орлов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0580d11552e3d4eb9",
    "age": 33,
    "group": 1,
    "name": {
      "first": "Владислав",
      "last": "Киселёв"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd05e72a50429fa278d",
    "age": 33,
    "group": 2,
    "name": {
      "first": "Владислава",
      "last": "Макарова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0b990b401f09a94f2",
    "age": 38,
    "group": 5,
    "name": {
      "first": "Всеволод",
      "last": "Андреев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0253d457425ac943b",
    "age": 26,
    "group": 3,
    "name": {
      "first": "Вячеслав",
      "last": "Ковалёв"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd097e35f222e73e429",
    "age": 29,
    "group": 3,
    "name": {
      "first": "Галина",
      "last": "Ильина"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0936ee5468089fba4",
    "age": 21,
    "group": 2,
    "name": {
      "first": "Геннадий",
      "last": "Гусев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0bea679ff3fb5ba77",
    "age": 28,
    "group": 6,
    "name": {
      "first": "Георгий",
      "last": "Титов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd097409020b7a67214",
    "age": 40,
    "group": 6,
    "name": {
      "first": "Глеб",
      "last": "Кузьмин"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd014d1f79c10b6e34a",
    "age": 34,
    "group": 3,
    "name": {
      "first": "Григорий",
      "last": "Кудрявцев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd022a72ac5dd32c5bf",
    "age": 20,
    "group": 3,
    "name": {
      "first": "Даниил",
      "last": "Баранов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd01949a9dd84aee87f",
    "age": 32,
    "group": 6,
    "name": {
      "first": "Дарья",
      "last": "Куликова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0f94a64bec56904a0",
    "age": 39,
    "group": 3,
    "name": {
      "first": "Денис",
      "last": "Алексеев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd054e00db8cb75617d",
    "age": 25,
    "group": 3,
    "name": {
      "first": "Дмитрий",
      "last": "Степанов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd04aebc4af6cd6fa6e",
    "age": 37,
    "group": 5,
    "name": {
      "first": "Евгений",
      "last": "Яковлев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0dec47b65cdbbac76",
    "age": 18,
    "group": 4,
    "name": {
      "first": "Евгения",
      "last": "Сорокина"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0b0d5d07d249fb982",
    "age": 37,
    "group": 1,
    "name": {
      "first": "Егор",
      "last": "Сергеев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0f3ac7cf99202701e",
    "age": 37,
    "group": 4,
    "name": {
      "first": "Екатерина",
      "last": "Романова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0e06a79020e43042d",
    "age": 45,
    "group": 5,
    "name": {
      "first": "Елена",
      "last": "Захарова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd05338ad38f74bbf0d",
    "age": 31,
    "group": 1,
    "name": {
      "first": "Елизавета",
      "last": "Борисова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd09db4961e0ac00803",
    "age": 24,
    "group": 6,
    "name": {
      "first": "Иван",
      "last": "Королёв"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd02474372262b56df8",
    "age": 37,
    "group": 4,
    "name": {
      "first": "Игорь",
      "last": "Герасимов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd00680f6c16ed69629",
    "age": 21,
    "group": 4,
    "name": {
      "first": "Илья",
      "last": "Пономарёв"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0624269decfd19763",
    "age": 37,
    "group": 1,
    "name": {
      "first": "Инна",
      "last": "Григорьева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd065ba9eb425c69a92",
    "age": 41,
    "group": 2,
    "name": {
      "first": "Ирина",
      "last": "Лазарева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0756ec2361e16ec16",
    "age": 43,
    "group": 6,
    "name": {
      "first": "Карина",
      "last": "Медведева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0efc3573ae308b142",
    "age": 20,
    "group": 3,
    "name": {
      "first": "Кирилл",
      "last": "Ершов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0cb9cef6a9f4f29e0",
    "age": 29,
    "group": 1,
    "name": {
      "first": "Константин",
      "last": "Никитин"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0ca30a7cdefac160b",
    "age": 20,
    "group": 4,
    "name": {
      "first": "Кристина",
      "last": "Соболева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd08e52291922c47375",
    "age": 27,
    "group": 5,
    "name": {
      "first": "Ксения",
      "last": "Рябова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0147fab10c870a166",
    "age": 40,
    "group": 5,
    "name": {
      "first": "Лариса",
      "last": "Полякова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd04c29a9feea84bce2",
    "age": 36,
    "group": 5,
    "name": {
      "first": "Лев",
      "last": "Цветков"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd088a67b2944274d47",
    "age": 28,
    "group": 3,
    "name": {
      "first": "Леонид",
      "last": "Данилов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0dc71b873d4d52b42",
    "age": 35,
    "group": 3,
    "name": {
      "first": "Лера",
      "last": "Жукова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0a52665427b070068",
    "age": 31,
    "group": 6,
    "name": {
      "first": "Лидия",
      "last": "Фролова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd08f9cb3dd37982847",
    "age": 36,
    "group": 1,
    "name": {
      "first": "Любовь",
      "last": "Журавлёва"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd013c8a4ce63ee1b36",
    "age": 33,
    "group": 2,
    "name": {
      "first": "Людмила",
      "last": "Николаева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0a5427dde9b7d5ef4",
    "age": 34,
    "group": 1,
    "name": {
      "first": "Максим",
      "last": "Крылов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0e2f3812944976e1a",
    "age": 22,
    "group": 6,
    "name": {
      "first": "Маргарита",
      "last": "Максимова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd03fa4337f528f7173",
    "age": 32,
    "group": 5,
    "name": {
      "first": "Марина",
      "last": "Сидорова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0bcc7da2f41c121ca",
    "age": 18,
    "group": 6,
    "name": {
      "first": "Мария",
      "last": "Осипова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0fecb21da9e55d61f",
    "age": 25,
    "group": 1,
    "name": {
      "first": "Михаил",
      "last": "Белоусов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd097c702a9e95773a7",
    "age": 33,
    "group": 2,
    "name": {
      "first": "Надежда",
      "last": "Федотова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0ed8a0306b7742d3c",
    "age": 19,
    "group": 5,
    "name": {
      "first": "Наталья",
      "last": "Дорофеева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0fc10da9e2f285e7d",
    "age": 30,
    "group": 1,
    "name": {
      "first": "Ника",
      "last": "Егорова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0b15679700e1a5f07",
    "age": 22,
    "group": 6,
    "name": {
      "first": "Никита",
      "last": "Матвеев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0624296e6592a3202",
    "age": 18,
    "group": 2,
    "name": {
      "first": "Николай",
      "last": "Бобров"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd082aaf93292b7fe1b",
    "age": 44,
    "group": 1,
    "name": {
      "first": "Нина",
      "last": "Дмитриева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd091bafff4f2caafe9",
    "age": 39,
    "group": 6,
    "name": {
      "first": "Оксана",
      "last": "Калинина"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd062f92d7e5a84426e",
    "age": 35,
    "group": 1,
    "name": {
      "first": "Олег",
      "last": "Анисимов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd06afec0a42e6b13be",
    "age": 24,
    "group": 6,
    "name": {
      "first": "Олеся",
      "last": "Петухова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd0b8ec5ca78d52231a",
    "age": 43,
    "group": 6,
    "name": {
      "first": "Ольга",
      "last": "Блинова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd05be502b5ab46ad2d",
    "age": 29,
    "group": 1,
    "name": {
      "first": "Остап",
      "last": "Антонов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd039483fc3ad95eba2",
    "age": 29,
    "group": 6,
    "name": {
      "first": "Пётр",
      "last": "Тимофеев"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0103e2e847b58d878",
    "age": 21,
    "group": 3,
    "name": {
      "first": "Павел",
      "last": "Никифоров"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd060418809e9133b56",
    "age": 34,
    "group": 6,
    "name": {
      "first": "Платон",
      "last": "Веселов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd09b6118e065f1ca20",
    "age": 45,
    "group": 1,
    "name": {
      "first": "Полина",
      "last": "Филиппова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd08094da0a06e71c64",
    "age": 31,
    "group": 3,
    "name": {
      "first": "Родион",
      "last": "Марков"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0c630ff666e574a5e",
    "age": 44,
    "group": 4,
    "name": {
      "first": "Роман",
      "last": "Большаков"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0ecae6bc3be7d8811",
    "age": 20,
    "group": 4,
    "name": {
      "first": "Ростислав",
      "last": "Суханов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0df0b56ffa74da068",
    "age": 21,
    "group": 6,
    "name": {
      "first": "Руслан",
      "last": "Миронов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0fe98272266374dbf",
    "age": 34,
    "group": 1,
    "name": {
      "first": "Светлана",
      "last": "Ширяева"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd026f3d779b77f6b82",
    "age": 21,
    "group": 1,
    "name": {
      "first": "Семён",
      "last": "Александров"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd01b46fc38118d0511",
    "age": 40,
    "group": 5,
    "name": {
      "first": "Сергей",
      "last": "Коновалов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd00a561bf5578e4643",
    "age": 38,
    "group": 4,
    "name": {
      "first": "Соня",
      "last": "Шестакова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd04c9bb6b515aa1512",
    "age": 39,
    "group": 2,
    "name": {
      "first": "Станислав",
      "last": "Казаков"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0aae7cd33b4effdbc",
    "age": 25,
    "group": 6,
    "name": {
      "first": "Степан",
      "last": "Ефимов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0f4b7b00896b5823e",
    "age": 44,
    "group": 6,
    "name": {
      "first": "Таисия",
      "last": "Денисова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd05a9bfa7c7efcc35f",
    "age": 41,
    "group": 4,
    "name": {
      "first": "Татьяна",
      "last": "Громова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd010a36f027d6c37ba",
    "age": 21,
    "group": 2,
    "name": {
      "first": "Юлия",
      "last": "Фомина"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd06cb5effd2815dc47",
    "age": 20,
    "group": 5,
    "name": {
      "first": "Юрий",
      "last": "Давыдов"
    },
    "gender": "m"
  },
  {
    "_id": "5630ecd0d396aff4e928e142",
    "age": 37,
    "group": 4,
    "name": {
      "first": "Яна",
      "last": "Мельникова"
    },
    "gender": "f"
  },
  {
    "_id": "5630ecd05099cdb17ae8f327",
    "age": 25,
    "group": 5,
    "name": {
      "first": "Ярослав",
      "last": "Щербаков"
    },
    "gender": "m"
  }
]

export default people;
