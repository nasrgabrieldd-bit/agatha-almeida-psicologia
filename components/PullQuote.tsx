export default function PullQuote({ text, alt = false }: { text: string; alt?: boolean }) {
  return (
    <section className={alt ? "pull-section alt" : "pull-section"}>
      <div className="wrap pull-inner reveal">
        <blockquote className="pull">{text}</blockquote>
      </div>
    </section>
  );
}
