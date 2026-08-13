import type { ReactNode } from 'react';
import type { PostBlock } from '../types';

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function ContentBlocks({ blocks = [] }: { blocks?: PostBlock[] }) {
  return <div className="prose">{blocks.map((block, index) => {
    if (block.type === 'heading') return <h2 key={index}>{renderInline(block.text)}</h2>;
    if (block.type === 'quote') return <blockquote key={index}>{renderInline(block.text)}</blockquote>;
    if (block.type === 'code') return <pre key={index} data-language={block.language}><code>{block.code}</code></pre>;
    if (block.type === 'image') return <figure key={index}><img src={block.src} alt={block.alt} loading="lazy" /></figure>;
    return <p key={index}>{renderInline(block.text)}</p>;
  })}</div>;
}
