# React Useful Types Library

Welcome to the React Useful Types Library! This library provides a collection of TypeScript types tailored for React applications, aiming to enhance type safety and improve development experience.

## Why types are important

Types are crucial in programming because they provide clarity and structure to code, reducing errors and improving maintainability. They enforce constraints, allowing developers to catch bugs early in the development process and providing valuable documentation for understanding codebases. Overall, types enhance the reliability and efficiency of software development.

## Features

- **Types that simplify your life**: A collection of types that helps u writing your React code faster.

## Installation

You can install the React Useful Types Library via npm:

```bash
npm install useful-react-types
```

or using yarn:

```bash
yarn add useful-react-types
```

or using pnpm:

```bash
pnpm install useful-react-types
```

## Usage

Once installed, you can import the types you need directly into your TypeScript files:

```typescript
import { Props } from 'useful-react-types';

type ExampleComponentProps = {
  example: string;
} & Props.ForceChildren & Props.HasClassName;

export const ExampleComponent = ({example, children, className}: ExampleComponentProps) => {
  return(
    <h1>Test</h1>
  )
}
```

OR

```typescript
import { Props } from 'useful-react-types';

export const ExampleComponent = ({children, className}: Props.HasChildrenAndClassName) => {
  return(
    <h1>Test</h1>
  )
}
```

## Contributing

Contributions to the React Useful Types Library are welcome! If want to contribute enhancements, or have feature requests, please open an issue or submit a pull request on the GitHub repository or contact me on Discord.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This library was inspired by the need for better type safety in React applications.
- Special thanks to the TypeScript team for providing an excellent typing system.

## Maintainers

- [Uhmpasterig](https://github.com/uhmpasterig) - Main Contributor
