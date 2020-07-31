module.exports = {
  // 用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 定义全局变量
  globals: {
    process: true
  },

  parserOptions: {
    // 指定eslint解析器，babel-eslint解析器是对babel解析器的包装
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures:{
      // 支持装饰器
      legacyDecorators: true
    }
  },
  // 指定想要启用的环境
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 扩展就是直接用别人写好的lint规则，扩展支持三种类型：
  // eslint:开头是ESlint官方的扩展，一共有两个，分别是eslint:recommended、eslint:all
  // plugin:开头是插件类型的扩展
  // npm包的扩展，npm扩展包必须以eslint-config开头，在extends里也可以省略前缀eslint-config
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // eslint官方规则只能检查JavaScript的语法，对于vue单文件和JSX，eslint就不适用了，这时需要引入对应的eslint-plugin
  // plugins插件，可省略前缀eslint-plugin-,
  // 以下插件分别为eslint-plugin-babel、eslint-plugin-prettier
  plugins: ['babel', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ],
    // 使用2个空格缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    // 是否能使用debugger,开发可以，线上不可以
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // switch必须提供 default
    'default-case': 'error',
    // 禁止扩展原生属性
    'no-extend-native': 'error',
    // 禁止一成不变的循环,防止代码出现死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    // js中应使用单引号替代双引号
    quotes: ['error', 'single'],
    // 要求大括号内必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 数组前后不需要添加空格
    'array-bracket-spacing': ['error', 'never'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 代码中可出现console
    'no-console': 'off',
    // 正则中可以出现控制字符
    'no-control-regex': 'off',
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
      // 可以声明未使用的h，方便jsx
      argsIgnorePattern: 'h'
    }],
    // 行注释必须在行上面
    "line-comment-position":['error',{"position": "above" }],
    // 一个函数最多能指定4个参数
    "max-params":['error',{max:4}],
    // 构造函数必须首字母大写
    // "new-cap":['error', {"newIsCap": true} ],
    // vue 属性顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    // 一行最多几个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 组件名称必须是大驼峰
    'vue/name-property-casing': ['error', 'PascalCase'],
    // vue Html元素单标签关闭方式
    'vue/html-self-closing': [
      'error',
      {
        html: { normal: 'never', void: 'always' },
        svg: 'always',
        math: 'always'
      }
    ],
    // 组件在template内必须使用 kebab-case 格式
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "registeredComponentsOnly": false,
      "ignores": []
    }],
    // template 内必须使用 ===
    "vue/eqeqeq": 'error',
    // scss deep 写法必须时 ::v-deep , 需要在这一处将 :v-deep 添加为例外
    // "selector-pseudo-element-no-unknown":["error","v-deep"],
    // 允许使用v-html
    "vue/no-v-html":0,
    // 禁用隐式的eval() 比如 setTimeout('alert();', 100)
    "no-implied-eval": 'error'
  },



  // 单元测试相关
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}