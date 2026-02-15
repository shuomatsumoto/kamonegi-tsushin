const categoryIcons: Record<string, string> = {
  雑記: "🗒️",
  分析: "🪓",
  創作: "🪄",
  紹介: "🗞️",
};

export function categoryIcon(name: string) {
  return categoryIcons[name] ?? "📄";
}

export function toYMD(dateStr: string) {
  return dateStr;
}
