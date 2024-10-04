import React from 'react';

interface FigureProps {
  src: string;
  number: number;
  caption: string;
  captionUrl?: string;
}

const Figure: React.FC<FigureProps> = ({ src, number, caption, captionUrl }) => {
  const fullCaption = `Figure ${number}. ${caption}`;

  return (
    <figure style={{ textAlign: 'center', margin: '20px 0', maxWidth: '100%' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', overflow: 'hidden' }}>
        <img
          src={src}
          alt={fullCaption}
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }}
        />
      </div>
      <figcaption 
        className="figure-caption"
        style={{ 
          marginTop: '2px', // Further reduced from 5px to 2px
          fontStyle: 'italic', 
          maxWidth: '600px', 
          margin: '2px auto 0', // Adjusted top margin here as well
          lineHeight: 1.2, // Reduced line height for tighter text
          fontSize: '0.9em', // Slightly smaller font size
        }}
      >
        Figure {number}.{' '}
        {captionUrl ? (
          <a href={captionUrl} target="_blank" rel="noopener noreferrer">
            {caption}
          </a>
        ) : (
          caption
        )}
      </figcaption>
    </figure>
  );
};

export default Figure;
