# 오늘의 라면 Server

## 💣  DB Schema
[👉DB Schema 바로가기](https://www.notion.so/q-bit/DB-baf6f29cdf4e44eeb0e763e6f4b3e1d6)

<img width="923" alt="스크린샷 2022-05-29 오후 4 19 32" src="https://user-images.githubusercontent.com/68772751/170856976-5edd0289-1b65-4cf6-a903-d56b09be3645.png">
<img width="853" alt="스크린샷 2022-05-29 오후 4 19 42" src="https://user-images.githubusercontent.com/68772751/170856975-cfe9889b-d6f8-4d82-8cbb-eb78d2b2c9b9.png">
<img width="727" alt="스크린샷 2022-05-29 오후 4 19 57" src="https://user-images.githubusercontent.com/68772751/170856974-d5fadb96-a30c-4149-a0f9-2d6fcb817f12.png">
<img width="727" alt="스크린샷 2022-05-29 오후 4 20 03" src="https://user-images.githubusercontent.com/68772751/170856967-128b0719-6ce5-4ef5-85c3-45071c78e23f.png">

## 💻 API 명세 및 개발 담당 부분

[👉API 명세서 바로가기](https://www.notion.so/q-bit/API-25477d755ad346fea284dbd2e992480d)


## 🤙 코드 컨벤션

### 네이밍

- lower**CamelCase** 사용
    - 클래스, 인터페이스, db스키마의 경우 Upper**CamelCase**
- 함수명 : 동사+명사
- 변수명 : 명사+명사 or 형용사+명사
- 변수 최대 길이 20자
- 명사는 단수로 쓰지 않되 개수를 나타내는 단어 꼭 적어주기
    - ex. 복수 : getUserList() / 단수 : getUser()

### 주석

- 한 줄 :  `//`
- 여러 줄 :  `/** */`

### 스타일

- 문자열 :  `’` 작은따옴표 사용
    - 변수나 따옴표 포함시  ```` 사용
- 세미콜론, 컴마 뒤에는 **공백** : `for (var i = 0; i < 10; i++) { }`
- var 금지

### 기타

- 마지막 줄 포함, 줄의 끝에 `,`
- 함수끼리 1줄 개행
- Promise함수의 사용은 지양하고 **async, await**를 사용
- 중괄호

```jsx
// **좋은 예**
if (foo) {
  서버가
}

// **나쁜 예**
if (foo)
{
	최고지
}
```

- .eslintrc.json
```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "google",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-empty-interface": ["error",{ "allowSingleExtends": true }],
    "new-cap": ["error", { "capIsNew": false }],
    "no-prototype-builtins": "off",
    "no-self-assign": "off",
    "no-empty": "off",
    "no-case-declarations": "off",
    "consistent-return": "off",
    "arrow-body-style": "off",
    "camelcase": "off",
    "quotes": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "comma-dangle": "off",
    "no-bitwise": "off",
    "no-use-before-define": "off",
    "no-extra-boolean-cast": "off",
    "no-empty-pattern": "off",
    "curly": "off",
    "no-unreachable": "off"
  },
	"ignorePatterns": [
    "dist/", 
    "node_modules/"
  ]
}
```
- .prettierrc.json
```
{
    "printWidth": 200,
    "tabWidth": 2,
    "useTabs": false, 
    "semi": true,
    "singleQuote": true,
    "quoteProps": "consistent",
    "trailingComma": "all",
    "bracketSpacing": true,
    "endOfLine": "auto",
    "arrowParens": "avoid"
}
```

## ⚡️ Git 컨벤션
### GIT Branch 전략

```
# 개발을 마치고 main으로 merge
# 각자 맡은 부분을 개인 브랜치에서 구현한 후, dev로 merge
---main----------------------------
     \
      \---dev----------------------
             \------ hyejung-------
              \------youjung-------
```

- 사용 브랜치
    - `main`
    - `dev` //default branch
    - `hyejung`
    - `youjung`

### Commit Message Convention
<img width="636" alt="스크린샷 2022-05-29 오후 4 31 05" src="https://user-images.githubusercontent.com/68772751/170857319-67e086ff-2cec-443e-b64a-af6b992575f5.png">

### Issue

- 라벨: CREATE / READ / UPDATE / DELETE
- 말머리: 커밋컨벤션과 동일
    - ex. [FEAT:#이슈번호] ~~ 구현

```jsx
## What is this issue?

## Progress 

- [x]
- [ ]
- [ ]

## Note
```

### PR

- Issue number 남기기

```
## 🌱관련 이슈
Related to: 

## ❓리뷰 포인트
```
- 코드 리뷰 필수
    - 칭찬과 격려 응원의 한ㅁㅏ디. 필수.

## 🗂 프로젝트 폴더링

```
│  .env
│  .eslintrc.json
│  .gitignore
│  .prettierrc.json
│  nodemon.json
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
└─src
    │  index.ts
    │  
    ├─config
    │      index.ts
    │      
    ├─controllers
    │      index.ts
    │      ReviewController.ts
    │      SubscribeController.ts
    │      
    ├─interfaces
    │  ├─common
    │  │      PostBaseResponseDto.ts
    │  │      
    │  ├─period
    │  │      PeriodInfo.ts
    │  │      
    │  ├─quantity
    │  │      QuantityInfo.ts
    │  │      
    │  ├─review
    │  │      ReviewCreateDto.ts
    │  │      ReviewDetailResponseDto.ts
    │  │      ReviewInfo.ts
    │  │      ReviewResponseDto.ts
    │  │      
    │  └─subscribe
    │          SubscribeCreateDto.ts
    │          SubscribeInfo.ts
    │          SubscribeOptionDto.ts
    │          
    ├─loaders
    │      db.ts
    │      
    ├─models
    │      Period.ts
    │      Quantity.ts
    │      Review.ts
    │      Subscribe.ts
    │      
    ├─modules
    │      responseMessage.ts
    │      statusCode.ts
    │      util.ts
    │      
    ├─routes
    │      index.ts
    │      ReviewRouter.ts
    │      SubscribeRouter.ts
    │      
    └─services
            index.ts
            ReviewService.ts
            SubscribeService.ts
```

## package.json
```
"devDependencies": {
    "@types/express": "^4.17.13",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.25",
    "@typescript-eslint/eslint-plugin": "^5.25.0",
    "@typescript-eslint/parser": "^5.25.0",
    "eslint": "^8.15.0",
    "eslint-config-google": "^0.14.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "nodemon": "^2.0.15",
    "prettier": "^2.6.2",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
  },
  "dependencies": {
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "mongoose": "^6.3.1"
  }
```
