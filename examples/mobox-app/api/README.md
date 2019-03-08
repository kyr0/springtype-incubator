# Generate a client

1. Start the server [optimizer-backend] (localhost:8080)
2. Run:

    `./generate-client.sh`
    
3. Go to `src/api.ts` and change the `BASE_PATH` 
   variable value to an empty string: `''`.
   
4. To build (and rebuild the main project) run: `tsc`