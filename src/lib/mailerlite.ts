interface SubscribeInput {
  email: string;
  name?: string;
  groupId?: string;
}

export async function subscribeToMailerlite(apiKey: string, input: SubscribeInput): Promise<void> {
  const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: input.email,
      ...(input.name ? { fields: { name: input.name } } : {}),
      ...(input.groupId ? { groups: [input.groupId] } : {}),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Mailerlite API error (${res.status}): ${text}`);
  }
}
