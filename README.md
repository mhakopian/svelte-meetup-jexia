[![Runme](https://svc.runme.io/static/button.svg)](http://runme.io/run?app_id=75b43e98-0f17-47e8-b1af-38a5a2ad5180)

# svelte-meetup-jexia
A meetup clone using Svelte + Jexia. UI gently borrowed from https://github.com/roeeyn/MeetupClone ✌🏼

## Get started
Install the dependencies...

```bash
cd svelte-meetup-jexia
npm install
```

## Setup Jexia credentials
In order to enable access to Jexia datasets, copy `.env.example` to `.env` file with your entries for `JEXIA_PROJECT_ID`, `JEXIA_API_KEY` and `JEXIA_API_SECRET`:

```bash
cp .env.example .env
```

## Running
Start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.
