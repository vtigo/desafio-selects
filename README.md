# desafio-selects

> Atividade de processo seletivo: implementação de selects dependentes em React + TypeScript.

Este projeto demonstra interface de três selects hierárquicos — **Categoria**, **Produto** e **Marca** — que filtram dinamicamente os dados de vendas exibidos em tela. A aplicação utiliza Vite, React, TypeScript, Tailwind CSS e componentes do ShadcnUI.

---

## Tecnologias

* **Framework:** [Vite](https://vitejs.dev/)
* **Biblioteca UI:** [React](https://reactjs.org/) + [Shadcn UI](https://ui.shadcn.com/)
* **Linguagem:** TypeScript
* **Estilo:** Tailwind CSS
* **Linting:** ESLint com configurações TypeScript

---

## Funcionalidades

* 📋 **Selects Dinâmicos**

  * 1º nível: **Categoria** (e.g. Electronics, Clothing…)
  * 2º nível: **Produto**, filtra conforme a categoria selecionada
  * 3º nível: **Marca**, filtra conforme categoria + produto

* 📊 **Exibição de Dados**
  Exibe um gráfico linear com as vendas por mês para a combinação selecionada.

---

## Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/vtigo/desafio-selects.git
   cd desafio-selects
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

4. **Acesse**

   ```
   http://localhost:5173
   ```

---

## Estrutura do projeto

```
desafio-selects/
├── public/                  # Arquivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   └── ...
|   ├── types /              # Definição de tipos
│   │   └── ...
|   ├── lib /              
│   │   └── utils.ts
│   ├── data/
│   │   └── salesData.ts     # Objeto SalesData com todas as vendas (mock)
|   ├── index.css            # CSS raiz, com a importação do tailwindcss
│   ├── App.tsx              # Componente raíz
│   └── main.tsx             # Bootstrapping do React e Vite
├── .gitignore
├── components.json          # Configuração do CLI Shadcn UI
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Como funciona

1. **Dados**
   Em `src/data/salesData.ts` existe um objeto `SalesData` no formato:

   ```ts
   type SalesEntry = { month: string; sales: number };
   type BrandData   = Record<string, SalesEntry[]>;
   type ProductData = Record<string, BrandData>;
   type CategoryData= Record<string, ProductData>;
   export const salesData: CategoryData = { … };
   ```

2. **Lógica dos selects**

   * Obtém as chaves do nível atual com `Object.keys(...)`
   * Usa `useMemo` para recalcular a lista de produtos quando a categoria muda
   * Usa `useEffect` para resetar o valor selecionado ao mudar de categoria ou produto

3. **Estilização**

   * Tailwind CSS para classes utilitárias

---

## Scripts disponíveis

* **`npm run dev`**
  Inicia o modo de desenvolvimento (Hot‐Reload)

* **`npm run build`**
  Gera a versão de produção em `dist/`

* **`npm run preview`**
  Serve o build de produção localmente

---
