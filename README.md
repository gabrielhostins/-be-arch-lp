# BE ARCH — Landing Page

Site institucional (landing page) da **BE ARCH — Arquitetura & Interiores**.
Site estático (HTML + CSS + JS), sem dependências, pronto para hospedagem na HostGator.

Domínio: **grupobearch.com.br**

## Estrutura

```
be-arch-lp/
├── index.html          → a página
├── styles.css          → estilos (cores e fontes da marca)
├── script.js           → menu mobile, animações, etc.
├── assets/
│   ├── logo-*.png       → logo BE ARCH (branco / marrom / oliva)
│   ├── mono-*.png       → monograma "BE"
│   ├── favicon-*.png    → ícones da aba
│   └── img/             → imagens do site (PLACEHOLDERS — trocar pelas fotos reais)
└── README.md
```

## Identidade visual (do manual da marca)

- **Cores:** taupe `#c1b0a3` · branco `#ffffff` · oliva `#46472c` · marrom `#663719`
- **Tipografia:** títulos em *Marcellus* (substituto de *Valestra*) e texto em *Cairo*.
  > A fonte oficial **Valestra** é paga e não está no Google Fonts. Usei *Marcellus*
  > como substituto próximo. Se você tiver os arquivos da Valestra (.woff2), dá para
  > embutir a fonte real — é só pedir.

## ⚠️ O que ainda precisa ser preenchido (dados reais)

Procure e substitua no `index.html`:

1. **WhatsApp** — troque `5547999999999` pelo número real (formato: 55 + DDD + número).
2. **E-mail** — `contato@grupobearch.com.br` (confirme se é esse).
3. **Instagram** — troque `https://instagram.com/` e `@bearch.arq` pelo perfil real.
4. **Link das avaliações do Google** — troque a URL de busca pelo link do perfil no Google.
5. **Fotos** — substitua os arquivos em `assets/img/` pelas fotos reais,
   mantendo os mesmos nomes (`hero.jpg`, `sobre.jpg`, `proj-*.jpg`).
6. **Textos** — "Diferenciais" e "Sobre" estão com texto provisório; ajuste ao gosto.

## Como editar e publicar

```bash
git add -A
git commit -m "descreva a mudança"
git push
```

Depois, no cPanel da HostGator → **Git Version Control** → **Manage** → **Pull or Deploy**.

---
Designed to BE.
