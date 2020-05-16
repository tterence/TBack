it('/test sends back a 200 response', async () => {
    const response = await global.request;
    expect(response.status).toEqual(200);
});