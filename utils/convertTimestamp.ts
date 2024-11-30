export function getHour(timestamp: number) {
  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    hour12: false,
  }).format(timestamp);
}

export function getDateCustom(timestamp: number) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    timestamp
  );
}
