React Drawing board

**A browser-ready efficient drawing board.**

- Support for drawing strokes, shapes, texts and images.
- Built-in support for both redo and clear.
- Easily zoom or pan the board content.
- Ability to save screenshot.
- Ability to be used as a Pictionary board for long distance communication.

## Installation

### In NPM
React Drawing board uses a CMD so you can use it in NPM as well. `npm install` this package and
```js
const DrawingBoard = require('react-drawing-board');
```

## Basic Use
### Basic 

```tsx
<DrawingBoard />
```

### As A Pictionary

```tsx
const Demo: React.FC = () => {
  const [operations, setOperations] = useState<Operation[]>([]);

  return (
    <Block
      userId="user1" // identify for different players.
      operations={operations}
      onChange={(newOperation, afterOperation) => {
        console.log(`TODO: send ${newOperation}`);
        setOperations(afterOperation);
      }}
    />
  )
}
```