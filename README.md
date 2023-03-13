# Technical assessment

## Technologies Used

This project uses the following technologies:

- React: A popular JavaScript library for building user interfaces.
- Vite: A fast and lightweight build tool for modern web applications.
- Vitest: A lightweight testing library for React applications.
- Mobx-State-Tree: A library for managing state in React applications.
- React-Query: A library for fetching and caching data in React applications.
- Stitches: A CSS-in-JS library for building scalable and maintainable styles.

## Getting Started

To get started with this project, you will need to have the following tools installed:

- Node.js (v18.14.2)
- Git

Once you have these tools installed, you can clone this repository and install the dependencies by running the following commands:

```
git clone git@github.com:jefersonjuliani/technical-assessment.git

cd technical-assessment

npm install
```

## Running the Application

To run the application, use the following command:

```
npm run dev
```

This will start the Vite development server.

## Running the Tests

To run the tests, use the following command:

```
npm run test
```

## Project Structure

The project has the following structure:

```
├── app.tsx
├── assets
│   ├── fonts
│   │   ├── Muli-Black.woff
│   │   ├── Muli-BlackItalic.woff
│   │   ├── Muli-Bold.woff
│   │   ├── Muli-BoldItalic.woff
│   │   ├── Muli-ExtraBold.woff
│   │   ├── Muli-ExtraBoldItalic.woff
│   │   ├── Muli-ExtraLight.woff
│   │   ├── Muli-ExtraLightItalic.woff
│   │   ├── Muli-Italic.woff
│   │   ├── Muli-Light.woff
│   │   ├── Muli-LightItalic.woff
│   │   ├── Muli-Regular.woff
│   │   ├── Muli-SemiBold.woff
│   │   └── Muli-SemiBoldItalic.woff
│   └── svg
│       └── loading.svg
├── components
│   ├── atoms
│   │   ├── containers
│   │   │   ├── box
│   │   │   │   ├── box.tsx
│   │   │   │   └── index.ts
│   │   │   ├── card
│   │   │   │   ├── card.tsx
│   │   │   │   └── index.ts
│   │   │   ├── container
│   │   │   │   ├── container.tsx
│   │   │   │   └── index.ts
│   │   │   └── flex
│   │   │       ├── flex.tsx
│   │   │       └── index.ts
│   │   ├── forms
│   │   │   ├── button
│   │   │   │   ├── button.tsx
│   │   │   │   └── index.ts
│   │   │   └── input
│   │   │       ├── index.ts
│   │   │       └── input.tsx
│   │   └── typography
│   │       ├── text
│   │       │   ├── index.ts
│   │       │   └── text.ts
│   │       └── title
│   │           ├── index.ts
│   │           └── title.ts
│   ├── molecules
│   │   ├── card_container
│   │   │   ├── card_container.tsx
│   │   │   └── index.ts
│   │   ├── loading
│   │   │   ├── index.ts
│   │   │   └── loading.tsx
│   │   ├── search_filter
│   │   │   ├── __tests__
│   │   │   │   └── search_filter.spec.tsx
│   │   │   ├── index.ts
│   │   │   └── search_filter.tsx
│   │   └── share_content
│   │       ├── __tests__
│   │       │   └── share_content.spec.tsx
│   │       ├── index.ts
│   │       └── share_content.tsx
│   └── organisms
│       ├── choices_view
│       │   ├── __tests__
│       │   │   └── choices_view.spec.tsx
│       │   ├── choices_view.tsx
│       │   └── index.ts
│       └── questions_list
│           ├── __tests__
│           │   └── questions_list.spec.tsx
│           ├── index.ts
│           └── questions_list.tsx
├── hooks
│   ├── mutations_hooks
│   │   ├── use_mutation_question_update.ts
│   │   └── use_share.ts
│   ├── queries_hooks
│   │   ├── use_query_health_status.ts
│   │   ├── use_query_question.ts
│   │   └── use_query_questions.ts
│   ├── use_debounce
│   │   ├── index.ts
│   │   └── use_debounce.ts
│   ├── use_questions_store
│   │   ├── index.ts
│   │   └── use_questions_store.ts
│   └── use_root_store
│       ├── index.ts
│       └── use_root_store.ts
├── main.tsx
├── models
│   ├── choice_model
│   │   ├── choice_model.ts
│   │   └── index.ts
│   ├── question_model
│   │   ├── index.ts
│   │   └── question_model.ts
│   └── root_store_model
│       ├── index.ts
│       └── root_store_model.ts
├── pages
│   ├── question_page
│   │   ├── index.tsx
│   │   └── question_page.tsx
│   ├── questions_page
│   │   ├── index.tsx
│   │   └── questions_page.tsx
│   ├── retry_page
│   │   ├── __tests__
│   │   │   └── retry_page.spec.tsx
│   │   ├── index.ts
│   │   └── retry_page.tsx
│   └── routes.tsx
├── providers
│   ├── provider_query
│   │   ├── index.ts
│   │   └── provider_query.tsx
│   └── provider_store
│       ├── context.ts
│       ├── index.ts
│       └── provider_store.tsx
├── services
│   ├── api.tsx
│   └── index.ts
├── theme
│   ├── global.ts
│   ├── index.ts
│   ├── sizes.ts
│   └── theme.tsx
├── utils
│   └── tests
│       ├── factories
│       │   ├── choice.factorie.ts
│       │   ├── id.factorie.ts
│       │   ├── index.ts
│       │   └── question.factorie.ts
│       ├── setup_tests.ts
│       └── wrappers
│           ├── wrapper_provider_query
│           │   ├── index.ts
│           │   └── wrapper_provider_query.tsx
│           └── wrapper_provider_router
│               ├── index.ts
│               └── wrapper_provider_router.tsx
└── vite-env.d.ts
```
