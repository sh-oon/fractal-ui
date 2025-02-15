export interface IntersectionObserverOptions {
  callback: (isVisible: boolean, entry: IntersectionObserverEntry) => void;
  options?: IntersectionObserverInit;
}
