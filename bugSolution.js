```javascript
// pages/about.js
export default function About() {
  return <h1>About Us</h1>;
}

// bug.js (remains unchanged)
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```