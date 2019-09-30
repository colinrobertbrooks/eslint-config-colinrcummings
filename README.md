# eslint-config-colinrcummings

ESLint rules for my personal projects using [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as a base and exposing some additional extensions.
.

## Usage

Install packages:

```
npm install --save-dev eslint eslint-config-colinrcummings
```

Add "extends": "colinrcummings" to your `.eslintrc`:

```json
{
  "extends": "colinrcummings",
  "env": {
    "browser": true // be sure to add this for frontend projects
  },
  "rules": {
    // your overrides
  }
}
```

Additional extensions:

- `colinrcummings/cypress`
- `colinrcummings/jest`
- `colinrcummings/prettier`
- `colinrcummings/prettier/react`

_`colinrcummings/prettier*` extensions must come last in the "extends" array so they get the chance to override other configs._

## License

MIT
