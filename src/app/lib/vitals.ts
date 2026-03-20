import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

export function reportVitals() {
  onCLS(console.log);
  onFCP(console.log);
  onLCP(console.log);
  onTTFB(console.log);
}
