export const endPointTableData = [
    {
        parameter: "api",
        type: "string",
        description: "The API provider to use. Options: 'openai' or 'together'"
    },
    {
        parameter: "model",
        type: "string",
        description: "The specific model to use (e.g., 'gpt-3.5-turbo', 'gpt-4', 'llama-2-70b')"
    },
    {
        parameter: "topic",
        type: "string",
        description: "The main topic or theme of the book"
    },
    {
        parameter: "language",
        type: "string",
        description: "The language in which the book should be generated"
    },
    {
        parameter: "word_count",
        type: "integer",
        description: "The approximate number of words for the generated book"
    },
]