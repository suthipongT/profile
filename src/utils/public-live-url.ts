// Reject repository hosts and local or credential-bearing addresses in public project links.
export function publicLiveUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/\.$/, '');
    const publicHost = host.includes('.') && !host.includes(':') && !/^\d+(?:\.\d+){3}$/.test(host)
      && !['github.com', 'localhost', 'local', 'internal'].some((name) => host === name || host.endsWith(`.${name}`));
    return url.protocol === 'https:' && !url.username && !url.password && !url.port && publicHost ? url.href : undefined;
  } catch { return undefined; }
}
