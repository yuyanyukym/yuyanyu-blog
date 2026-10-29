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
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'grid', gap: '24px' }}>
        {poems.map(poem => (
          <div
            key={poem.id}
            style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '1.3em' }}>{poem.title}</h3>
              <p style={{ color: '#999', fontSize: '0.9em', margin: '0' }}>{poem.date}</p>
            </div>
            <div
              style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '1.8',
                color: '#444',
                fontFamily: 'Georgia, serif',
              }}
            >
              {poem.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
