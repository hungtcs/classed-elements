# classed-elements

[![npm version](https://badge.fury.io/js/classed-elements.svg)](https://badge.fury.io/js/classed-elements)

`classed-elements` is a utility that simplifies the process of reusing components with Tailwind CSS in SolidJS.
This tool is inspired by styled-components and aims to streamline the development of reusable tailwind css components in your SolidJS applications.

## Installation

```shell
pnpm add classed-elements
# or
npm install classed-elements
```

## Usage

```tsx
import classed from "classed-elements";

const Wrapper = classed.div`relative w-[100px] h-[100px] bg-blue-500`;

export function App() {
  return <Wrapper>App Content</Wrapper>;
}
```

In this example, we've created a classed Wrapper component using classed-elements, applying Tailwind CSS classes to it.
You can then use the Wrapper component in your SolidJS application as you would with any other component.

## Working With Tailwind CSS IntelliSense

In order to support tailwind auto-completion,
you need to add the following content in the vscode configuration file `.vscode/settings.json`

```jsonc
{
  "tailwindCSS.experimental.classRegex": [
    "classed\\(.+\\)`(.*)`",
    "classed\\.\\w+`(.*)`"
  ]
}
```

## Features

- **Reusability**: Styled components created with Classed-Elements can be reused across your application, reducing code duplication and improving maintainability.

- **TypeScript Support**: Classed-Elements offers seamless integration with TypeScript, ensuring type safety and enhanced development with static typing.
