# estudo-mandarim

App de fichas para estudo de mandarim com pinyin, hanzi, tradução e som.
Feito em HTML, CSS e JS puro, sem frameworks.

O app pode ser visto [aqui](https://sheilagomes.github.io/estudo-mandarim/).

## Conteúdo L01 (Centro Ásia)

- Vocabulário da lição 01 em `data/palavras.json` (categoria `L01`)
- Frases de tradução corrigidas em `data/frases.json` (tags `L01-Horas`, `L01-Dias`, `L01-Direções`, `L01-Lição`)
- Perguntas e respostas em `data/perguntas.json`

## Executar localmente

```bash
python3 -m http.server 8080
```

Abra http://localhost:8080 no navegador.

## GitHub Pages

O app carrega os JSON de `data/` via `fetch`.
Palavras sem arquivo de áudio usam síntese de voz do navegador como alternativa.
