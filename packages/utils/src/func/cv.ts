type ClassValue = string | number | boolean | null | undefined | ClassDictionary | ClassArray

interface ClassDictionary {
  [key: string]: any
}

interface ClassArray extends Array<ClassValue> {}

/**
 * 여러 클래스 값을 받아 하나의 문자열로 합성합니다.
 * 문자열, 배열, 객체 형태를 지원합니다.
 *
 * 사용 예)
 *   const className = cx(
 *     'btn',
 *     isActive && 'btn-active',
 *     { 'btn-disabled': disabled }
 *   );
 */
export function cx(...classes: ClassValue[]): string {
  const result: string[] = []

  for (const cls of classes) {
    if (!cls) continue

    if (typeof cls === 'string' || typeof cls === 'number') {
      result.push(String(cls))
    } else if (Array.isArray(cls)) {
      result.push(cx(...cls))
    } else if (typeof cls === 'object') {
      for (const key in cls) {
        if (Object.prototype.hasOwnProperty.call(cls, key) && cls[key]) {
          result.push(key)
        }
      }
    }
  }

  return result.join(' ').trim()
}
