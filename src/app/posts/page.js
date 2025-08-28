import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Erro ao buscar os posts");
  }

  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <main>
      <Link href="/" className="button-link" style={{ marginBottom: "2rem" }}>
        ← Voltar para a página inicial
      </Link>

      <h1>Lista de Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid var(--border-color)",
              backgroundColor: "white",
              padding: "1.5rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ color: "var(--primary-color-light)", marginTop: 0 }}>
              {post.title}
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
