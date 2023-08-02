export const renderHighlightedText = (text:string, highlight:string) => {
    const parts = text.split(highlight);
  
    const elements = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return <h1 key={index}>{part}</h1>;
      } else {
        return (
          <h1 key={index}>
            {part}
            <span>{highlight}</span>
          </h1>
        );
      }
    });
  
    return elements;
  };