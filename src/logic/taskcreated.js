export function taskCreated(date) {
  const now = new Date();
  const diff = now - date;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return "a moment ago"
  else if (minutes < 2) return "1 minute ago"
  else if (minutes < 60) return `${minutes} minute ago`
  else if (hours < 2) return "1 hour ago"
  else if (hours < 24) return `${hours} hours ago`
  else if (days < 2) return "1 day ago"
  else if (days < 7) return `${days} days ago`
  else if (weeks < 4) return `${weeks} weeks ago`
  else if (months < 12) return `${months} months ago`
  else return `${years} year ago`
}
