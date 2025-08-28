import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <Image
        src="/minhafoto.jpg"
        alt="Foto de perfil"
        width={200}
        height={200}
        style={{ borderRadius: "50%", marginTop: "1rem" }}
      />
      <h1>Vitor Alves</h1>
      <p style={{ marginTop: "1rem" }}>Programador Front-End Junior.</p>

      <div style={{ textAlign: "center" }}>
        <Link href="/posts" className="button-link">
          Ver a lista de posts
        </Link>
      </div>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <a
          href="https://github.com/Vitor-Souza20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub size={32} style={{ color: "var(--primary-color)" }} />
        </a>
        <a
          href="https://www.instagram.com/v.sssilva/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={32} style={{ color: "var(--primary-color)" }} />
        </a>
        <a href="vitor.souza@gmail.com" aria-label="Email">
          <MdEmail size={32} style={{ color: "var(--primary-color)" }} />
        </a>
      </div>
    </main>
  );
}
