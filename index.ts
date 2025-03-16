import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// creating the server
const server = new McpServer({
    name: "Demo",
    version: "1.0.0",
});

// adding a tool
server.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
}));

// connecting the server to the transport
const transport = new StdioServerTransport();
await server.connect(transport);