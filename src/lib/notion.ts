interface ContactLeadInput {
  name: string;
  email: string;
  message?: string;
  source: string;
}

export async function logLeadToNotion(apiKey: string, databaseId: string, input: ContactLeadInput): Promise<void> {
  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ text: { content: input.name } }] },
        Email: { email: input.email },
        Source: { rich_text: [{ text: { content: input.source } }] },
        ...(input.message ? { Message: { rich_text: [{ text: { content: input.message } }] } } : {}),
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion API error (${res.status}): ${text}`);
  }
}
