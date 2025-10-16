FROM mcr.microsoft.com/playwright:focal

WORKDIR /work

COPY package.json package-lock.json* /work/
RUN npm ci

COPY . /work/
RUN npx playwright install --with-deps || true
RUN npm run build:zip || true

CMD ["npx", "playwright", "test", "--reporter=html"]
