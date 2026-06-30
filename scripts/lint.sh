#!/bin/bash

## Run prettier. See ignored path in .prettierignore.
yarn exec prettier "./**/*.{js,jsx,ts,tsx,md,css,scss}" --write

## Run JS linting. See ignored path in .eslintignore.
yarn exec eslint ./{.,packages} --fix
