# string-case

Convert the case of a string

<!-- toc -->

- [Installation](#installation)
- [Modules](#modules)
  * [caseToCase](#casetocase)
  * [from](#from)
  * [to](#to)
  * [convert](#convert)
  * [is](#is)
  * [isCamel](#iscamel)
  * [isKebab](#iskebab)
  * [isPascal](#ispascal)
  * [isScreamingKebab](#isscreamingkebab)
  * [isScreamingSnake](#isscreamingsnake)
  * [isSnake](#issnake)
  * [isLower](#islower)
  * [isUpper](#isupper)
  * [isButton](#isbutton)
  * [isSentence](#issentence)
  * [getCase](#getcase)
  * [toCase](#tocase)
  * [toCamelCase](#tocamelcase)
  * [toKebabCase](#tokebabcase)
  * [toPascalCase](#topascalcase)
  * [toScreamingKebabCase](#toscreamingkebabcase)
  * [toScreamingSnakeCase](#toscreamingsnakecase)
  * [toSnakeCase](#tosnakecase)

<!-- tocstop -->

## Installation

```shell
yarn add @dekk-utils/string-case
## with npm
# npm install @dekk-utils/string-case
```

## Modules

### caseToCase

```ts
import { camelToSnake } from "@dekk-utils/string-case/camel/snake";
camelToSnake("fooBar")
// foo_bar
```

### from

```ts
import { from } from "@dekk-utils/string-case/from";
from.camel.to.snake("fooBar")
// foo_bar
```

### to

```ts
import { to } from "@dekk-utils/string-case/from";
to.snake.from.camel("fooBar")
// foo_bar
```

### convert

```ts
import { convert } from "@dekk-utils/string-case/convert";
convert.snake.to.camel("fooBar")
// foo_bar
convert.camel.from.snake("fooBar")
// foo_bar
```

### is

```ts
import { is } from "@dekk-utils/string-case/is";
is.camel("fooBar")
// true
is.snake("fooBar")
// false
```

### isCamel

```ts
import { isCamel } from "@dekk-utils/string-case/is/camel";
isCamel("fooBar")
// true
isCamel("foo_bar")
// false
```

### isKebab

```ts
import { isKebab } from "@dekk-utils/string-case/is/kebab";
isKebab("foo-bar")
// true
isKebab("foo_bar")
// false
```

### isPascal

```ts
import { isPascal } from "@dekk-utils/string-case/is/pascal";
isPascal("FooBar")
// true
isPascal("foo_bar")
// false
```

### isScreamingKebab

```ts
import { isScreamingKebab } from "@dekk-utils/string-case/is/screaming-kebab";

isScreamingKebab("Foo-Bar")
// true
isScreamingKebab("foo_bar")
// false
```

### isScreamingSnake

```ts
import { isScreamingSnake } from "@dekk-utils/string-case/is/screaming-snake";

isScreamingSnake("Foo_Bar")
// true
isScreamingSnake("foo_bar")
// false
```

### isSnake

```ts
import { isSnake } from "@dekk-utils/string-case/is/snake";

isSnake("foo_bar")
// true
isSnake("fooBar")
// false
```

### isLower

```ts
import { isLower } from "@dekk-utils/string-case/is/lower";

isLower("foobar")
// true
isLower("fooBar")
// false
```

### isUpper

```ts
import { isUpper } from "@dekk-utils/string-case/is/upper";

isUpper("FOOBAR")
// true
isUpper("fooBar")
// false
```

### isButton

```ts
import { isButton } from "@dekk-utils/string-case/is/button";

isButton("Foo Bar")
// true
isButton("fooBar")
// false
```


### isSentence

```ts
import { isSentence } from "@dekk-utils/string-case/is/sentence";

isSentence("Foo bar")
// true
isSentence("fooBar")
// false
```

### getCase

```ts
import { getCase } from "@dekk-utils/string-case/get-case";
getCase("fooBar")
// camel
getCase("foo_bar")
// snake
```

### toCase

```ts
import { toCase } from "@dekk-utils/string-case/to-case";
// As default
// import toCase  from "@dekk-utils/string-case";
toCase("fooBar", "snake")
// foo_bar
toCase("foo_bar", "camel")
// fooBar
```

### toCamelCase

```ts
import { toCamelCase } from "@dekk-utils/string-case/to-camel-case";

toCamelCase("foo_bar")
// fooBar
```

### toKebabCase

```ts
import { toKebabCase } from "@dekk-utils/string-case/to-kebab-case";

toKebabCase("foo_bar")
// foo-bar
```

### toPascalCase

```ts
import { toPascalCase } from "@dekk-utils/string-case/to-pascal-case";

toPascalCase("foo_bar")
// FooBar
```

### toScreamingKebabCase

```ts
import { toScreamingKebabCase } from "@dekk-utils/string-case/to-screaming-kebab-case";

toScreamingKebabCase("foo_bar")
// FOO-BAR
```

### toScreamingSnakeCase

```ts
import { toScreamingSnakeCase } from "@dekk-utils/string-case/to-screaming-snake-case";

toScreamingSnakeCase("foo_bar")
// FOO_BAR
```

### toSnakeCase

```ts
import { toSnakeCase } from "@dekk-utils/string-case/to-snake-case";

toSnakeCase("fooBar")
// foo_bar
```
