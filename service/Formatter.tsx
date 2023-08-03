export const renderHighlightedText = (text:string, highlight:string, color:string) => {
    const parts = text.split(highlight);
  
    const elements = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return <h1 style={{color:color}} key={index}>{part}</h1>;
      } else {
        return (
          <h1 style={{color:color}} key={index}>
            {part}
            <span>{highlight}</span>
          </h1>
        );
      }
    });
  
    return elements;
  };