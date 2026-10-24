import { useState } from 'preact/hooks';
import type { FunctionComponent } from 'preact';

interface Poem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

interface PoemListProps {
  poems: Poem[];
}

export const PoemList: FunctionComponent<PoemListProps> = ({ poems }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedPoem, setSelectedPoem] = useState<string | null>(null);

  const allTags = Array.from(new Set(poems.flatMap(p => p.tags)));
  const filtered = selectedTag 
    ? poems.filter(p => p.tags.includes(selectedTag))
    : poems;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '15px' }}>标签过滤</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <button
            onClick={() => setSelectedTag(null)}
            style={{
              padding: '8px 16px',
              background: selectedTag === null ? '#333' : '#eee',
              color: selectedTag === null ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            全部
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: '8px 16px',
                background: selectedTag === tag ? '#666' : '#eee',
                color: selectedTag === tag ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        {filtered.map(poem => (
          <div
            key={poem.id}
            onClick={() => setSelectedPoem(selectedPoem === poem.id ? null : poem.id)}
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2em' }}>{poem.title}</h4>
                <p style={{ color: '#999', fontSize: '0.9em', margin: '0 0 12px 0' }}>{poem.date}</p>
                <p style={{ color: '#666', margin: '0 0 12px 0' }}>{poem.excerpt}</p>
              </div>
              <span style={{ fontSize: '1.2em', color: '#ccc' }}>
                {selectedPoem === poem.id ? '−' : '+'}
              </span>
            </div>

            {selectedPoem === poem.id && (
              <div style={{
                marginTop: '15px',
                paddingTop: '15px',
                borderTop: '1px solid #eee',
                whiteSpace: 'pre-wrap',
                lineHeight: '1.8',
                color: '#444',
                fontFamily: 'Georgia, serif',
              }}>
                {poem.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
