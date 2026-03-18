import styles from "./page.module.css";
import Example from "@/components/Example/Example";
import Card from "@/components/Card/Card";
import heroImage from "@/public/images/hero.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <Example />
      <Card
        label="Design Systems 2"
        title="Building with Figma MCP"
        description="Learn how to connect your design tokens directly to your codebase and keep your UI in sync with your design files."
        tag="Tutorial"
        buttonLabel="Read more"
        image={heroImage}
        imageAlt="Cold brew drinks"
      />
    </main>
  );
}
