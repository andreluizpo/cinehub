const TMDB_API_ACCESS_TOKEN = process.env.TMDB_API_ACCESS_TOKEN;
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${TMDB_API_ACCESS_TOKEN}` },
};

export default async function Home() {
  // Obtendo os filmes e séries que estão em tendência hoje
  // const res = await fetch(`${TMDB_BASE_URL}/trending/all/day?language=pt-BR`, options);

  // Obtendo detalhes sobre um filme a partir do seu ID
  const res = await fetch(`${TMDB_BASE_URL}/movie/1377237?language=pt-BR`, options);
  const data = await res.json();

  // stringify converte um objeto/array JavaScript em uma string de texto no formato JSON
  // - data — o objeto que será convertido
  // - null — parâmetro opcional. Serve para filtra quais chaves serão incluídas. "null" significa todas.
  // - 2 — quantidade de espaços usados pra indentação
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
