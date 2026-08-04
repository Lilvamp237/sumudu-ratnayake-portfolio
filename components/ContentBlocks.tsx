import type { PostBlock } from '../types';

export function ContentBlocks({ blocks = [] }: { blocks?: PostBlock[] }) {
  return <div className="prose">{blocks.map((block, index) => {
    if (block.type === 'heading') return <h2 key={index}>{block.text}</h2>;
    if (block.type === 'quote') return <blockquote key={index}>{block.text}</blockquote>;
    if (block.type === 'code') return <pre key={index} data-language={block.language}><code>{block.code}</code></pre>;
    if (block.type === 'image') return <figure key={index}><img src={block.src} alt={block.alt} loading="lazy" /></figure>;
    return <p key={index}>{block.text}</p>;
  })}</div>;
}
