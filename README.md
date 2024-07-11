# An Improved Chatbot - for Coaching (powered by GPT-4)

This project implements a Chatbot powered by OpenAI's GPT-4, designed to support multiple sessions and persist conversations in a MongoDB database. It is built using Next.js, TypeScript, Tailwind CSS, Prisma, and Authjs with Google as the authentication provider.

We are also using flowbite for styling, and also using react-icons.

## Getting Started

First, download code. Then get dependencies and generate the database type bindings:

```bash
npm install
npx prisma gnerate
```

Setup the environment variables. Create a `.env` file with the following:
```bash
MONGODB_URI=DB-Store
AUTH_SECRET=AuthJS-Secret
AUTH_GOOGLE_ID=Google-Auth
AUTH_GOOGLE_SECRET=Google-Auth
OPENAI_API_KEY=GPT35-Key
```
Now, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
