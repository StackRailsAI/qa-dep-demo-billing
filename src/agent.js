// QA probe for AI tool access on pull requests (124hhvu6buy): an agent that connects to MCP servers in code.
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');
const { StreamableHTTPClientTransport } = require('@modelcontextprotocol/sdk/client/streamableHttp.js');

const postgres = new StdioClientTransport({
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-postgres'],
});
const remote = new StreamableHTTPClientTransport(new URL(process.env.MCP_SERVER_URL));

module.exports = { postgres, remote };
